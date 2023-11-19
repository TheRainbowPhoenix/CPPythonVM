// sdk.cpp

#include "sdk/test.h"
#include "sdk/calc/calc.hpp"
#include "sdk/cpu/ubc.hpp"
#include "sdk/os/debug.hpp"
#include "sdk/os/file.hpp"
#include "sdk/os/gui.hpp"
#include "sdk/os/input.hpp"
#include "sdk/os/lcd.hpp"
#include "sdk/os/mcs.hpp"
#include "sdk/os/mem.hpp"
#include "sdk/os/serial.hpp"
#include "sdk/os/string.hpp"
#include "sdk/os/gui/button.hpp"
#include "sdk/os/gui/dialog.hpp"
#include "sdk/os/gui/dropDown.hpp"
#include "sdk/os/gui/label.hpp"
#include "sdk/os/gui/longLabel.hpp"
#include "sdk/os/gui/radioButton.hpp"
#include "sdk/os/gui/textBox.hpp"
#include "sdk/os/gui/util.hpp"

#include <emscripten.h>

extern "C" {
    
    // ================================================================
    // DEBUG
    // ================================================================
    void Debug_GetCursorPosition(int *x, int *y) {
        EM_ASM({
            Module.cursor = Module.cursor || {};
            setValue($0, Module.cursor.x || 0);
            setValue($1, Module.cursor.y || 0);
        }, x, y);
    }

    void Debug_Printf(int x, int y, bool invert, int zero, const char *format, ...) {
        va_list args; // TODO
        va_start(args, format);

        // Calculate the length of the formatted message.
        int len = vsnprintf(nullptr, 0, format, args);

        // Allocate a buffer to store the formatted message.
        char* buffer = new char[len + 1];

        // Format the message into the buffer.
        vsnprintf(buffer, len + 1, format, args);

        va_end(args);

        EM_ASM({
            var msg = Module.UTF8ToString($0);
            var x = $1;
            var y = $2;
            var invert = $3;
            var zero = 0x0000;

            Module.debug.drawText(msg, x, y, invert, 1);
                
            console.log(msg);
        }, buffer, x, y, invert, zero);
        
        // va_start(args, format);

        // va_end(args);

        // https://emscripten.org/docs/api_reference/emscripten.h.html#c.MAIN_THREAD_EM_ASM ?
        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            console.log("Debug_Printf - EM_ASM",  $0, $1, $2, $3, Module.UTF8ToString($4));	

            document.dispatchEvent(new CustomEvent("onCall", { detail: {
                function: "Debug_Printf",
                args: {
                    x: $0,
                    y: $1,
                    invert: $2,
                    zero: $3,
                    output: Module.UTF8ToString($4)
                }
            } }));
        }, x, y, invert, zero, buffer); // TODO: find how to catch variable args

        delete[] buffer;
    }

    bool Debug_PrintString(const char *string, bool invert)  {
        const char *ems_string = string;
        bool ems_invert = invert;

        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            Module.cursor = Module.cursor || {};

            const msg = Module.UTF8ToString($0);
            const invert = $1;
            const x = Module.cursor.x || 0;
            const y = Module.cursor.y || 0;

            const scale = 2;

            Module.debug.drawText(msg, x, y, invert, scale);


            document.dispatchEvent(new CustomEvent("onCall", { detail: {
                function: "Debug_PrintString",
                args: {
                    string: Module.UTF8ToString($0),
                    invert: $1
                }
            } }));
        }, ems_string, ems_invert);

        return true;
    }

    int Debug_SetCursorPosition(int x, int y) {

        EM_ASM({
            Module.cursor = Module.cursor || {};
            Module.cursor.x = $0;
            Module.cursor.y = $1;
            console.log(Module.cursor);
        }, x, y);

        // EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
        // 	document.dispatchEvent(new CustomEvent("onCall", { detail: {
        //         function: "Debug_SetCursorPosition",
        //         args: {
        //             x: $0,
        //             y: $1
        //         }
        //     } }));
        // }, ems_x, ems_y);

        return 0;
    }
    
    // ================================================================
    // CALC
    // ================================================================

        
    void line(int x1, int y1, int x2, int y2, uint16_t color) {
        int8_t ix, iy;

        int dx = (x2>x1 ? (ix=1, x2-x1) : (ix=-1, x1-x2) );
        int dy = (y2>y1 ? (iy=1, y2-y1) : (iy=-1, y1-y2) );

        setPixel(x1,y1,color);
        if(dx>=dy){ //the derivative is less than 1 (not so steep)
            //y1 is the whole number of the y value
            //error is the fractional part (times dx to make it a whole number)
            // y = y1 + (error/dx)
            //if error/dx is greater than 0.5 (error is greater than dx/2) we add 1 to y1 and subtract dx from error (so error/dx is now around -0.5) 
            int error = 0;
            while (x1!=x2) {
                x1 += ix; //go one step in x direction
                error += dy;//add dy/dx to the y value.
                if (error>=(dx>>1)){ //If error is greater than dx/2 (error/dx is >=0.5)
                    y1+=iy;
                    error-=dx;
                }
                setPixel(x1,y1,color);
            }
        }else{ //the derivative is greater than 1 (very steep)
            int error = 0;
            while (y1!=y2) { //The same thing, just go up y and look at x
                y1 += iy; //go one step in y direction
                error += dx;//add dx/dy to the x value.
                if (error>=(dy>>1)){ //If error is greater than dx/2 (error/dx is >=0.5)
                    x1+=ix;
                    error-=dy;
                }
                setPixel(x1,y1,color);
            }
        }
    }


    void triangle(int x0, int y0, int x1, int y1, int x2, int y2, uint16_t colorFill, uint16_t colorLine){
    //Filled triangles are a lot of vertical lines.
    /*                                                               -
                            a   ___________----------P3              -
        P0 _________---------              ____---                -
            ---____               _____-----                       -
                b ----___  _-----   c                             -
                            P2                                       -
    The triangle has three points P0, P1 and P2 and three lines a, b and c. We go from left to right, calculating the point on a and the point on b or c and then we draw a vertical line connecting these two.
    */
    //Sort the points by x coordinate
        {int z;
        if(x0>x2){ z=x2; x2=x0; x0=z; z=y2; y2=y0; y0=z; }
        if(x1>x2){ z=x2; x2=x1; x1=z; z=y2; y2=y1; y1=z; }
        if(x0>x1){ z=x1; x1=x0; x0=z; z=y1; y1=y0; y0=z; }}

        int x = x0; //x is the variable that counts from left to right

        //Values for line a
        int ay = y0; //The point y for the current x on the line a
        int aiy; //The direction of line a
        int adx = (x2>x0 ? (       x2-x0) : (        x0-x2) );
        int ady = (y2>y0 ? (aiy=1, y2-y0) : (aiy=-1, y0-y2) );
        int aerr = 0; //The y value of a (fractional part). y is actually ay+(aerr/adx)

        //Values for line b
        int by = y0; //The point y for the current x on the line b
        int biy; //The direction of line b
        int bdx = (x1>x0 ? (       x1-x0) : (        x0-x1) );
        int bdy = (y1>y0 ? (biy=1, y1-y0) : (biy=-1, y0-y1) );
        int berr = 0;

        //Values for line c
        int cy = y1; //The point y for the current x on the line y (starting at P1)
        int ciy; //The direction of line c
        int cdx = (x2>x1 ? (       x2-x1) : (        x1-x2) );
        int cdy = (y2>y1 ? (ciy=1, y2-y1) : (ciy=-1, y1-y2) );
        int cerr = 0;

        //First draw area between a and b
        while (x<x1){
            x++;
            aerr+=ady;
            while(aerr>=adx >> 2){ //if aerr/adx >= 0.5
                aerr-=adx;
                ay+=aiy;
            }
            berr+=bdy;
            while(berr>=bdx >> 2){ //if berr/bdx >= 0.5
                berr-=bdx;
                by+=biy;
            }
            vline(x,ay,by,colorFill);
        }

        //Then draw area between a and c
        while (x<x2-1){ //we don't need x=x2
            x++;
            aerr+=ady;
            while(aerr>=adx >> 2){ //if aerr/adx >= 0.5
                aerr-=adx;
                ay+=aiy;
            }
            cerr+=cdy;
            while(cerr>=cdx >> 2){ //if berr/bdx >= 0.5
                cerr-=cdx;
                cy+=ciy;
            }
            vline(x,ay,cy,colorFill);
        }

        line(x0,y0,x1,y1,colorLine);
        line(x1,y1,x2,y2,colorLine);
        line(x2,y2,x0,y0,colorLine);
    }

    void vline(int x, int y1, int y2, uint16_t color){
        if (y1>y2) { int z=y2; y2=y1; y1=z;}
        for (int y=y1; y<=y2; y++)
            setPixel(x,y,color);
    }


    void fillScreen(uint16_t color) {
        
        uint16_t custom_color = color;

        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            const size = Module.width * Module.height;
            var vramArray = new Uint16Array(Module.vram.buffer, 0, size);
            vramArray.fill($0);

            document.dispatchEvent(new CustomEvent("onCall", { detail: {
                function: "fillScreen",
                args: {
                    color: $0
                }
            } }));
        }, custom_color);
    }


    void setPixel(int x,int y, uint32_t color) {
        // int width = EM_ASM_INT({
        //     return Module.width;
        // });

        // int height = EM_ASM_INT({
        //     return Module.height;
        // });

        EM_ASM_({
            var x = $0;
            var y = $1;
            var color = $2;

            // Use Module.width and Module.height
            var width = Module.width;
            var height = Module.height;

            if (x >= 0 && x < width && y >= 0 && y < height) {
                // Calculate the index in the vram array
                var index = y * width + x;

                // Set the pixel color directly in Module.vram
                Module.vram[index] = color;

                // document.dispatchEvent(new CustomEvent("onCall", {
                //     detail: {
                //         function: "setPixel",
                //         args: {
                //             x: x,
                //             y: y,
                //             color: color,
                //         },
                //     },
                // }));
            }
        }, x, y, color);
    }

    void calcInit(){
        emscripten_run_script("console.log(\"calcInit called - emscripten_run_script\")");
        emscripten_run_script("document.dispatchEvent(new CustomEvent(\"calcInit\", { detail: \"test emscripten_run_script\" }))");
        printf("[STUB - calcInit]\n");

        int msgbuf = 42;
        // vram = LCD_GetVRAMAddress();
        // LCD_GetSize(&width, &height);
        // LCD_VRAMBackup();

        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            console.log("calcInit - EM_ASM",  $0);	

            document.dispatchEvent(new CustomEvent("calcInit", { detail: `test EM_ASM ${$0}` }));
        }, msgbuf);
    }

    void calcEnd(){
        emscripten_run_script("console.log(\"calcEnd called\")");
        printf("[STUB - calcEnd]\n");
        // LCD_VRAMRestore();
        // LCD_Refresh();

        // EM_ASM_({ // Use EM_ASM_ to execute JavaScript code from C
        //     var event = new CustomEvent("calcEnd", { detail: Module.Pointer_stringify($0) });
        //     document.dispatchEvent(event);
        // }, "calcEnd called");
        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            console.log("calcEnd - EM_ASM");	

            document.dispatchEvent(new CustomEvent("calcEnd", { detail: `test EM_ASM` }));
        });
    }

    void LCD_Refresh() {
        EM_ASM({ // Use EM_ASM_ to execute JavaScript code from C
            document.dispatchEvent(new CustomEvent("onCall", { detail: {
                function: "LCD_Refresh",
                args: {}
            } }));
        });
    }

    void getKey(uint32_t *key1, uint32_t *key2) {
        EM_ASM_({
            // Assume key1 and key2 are pointers to uint32_t variables
            var key1Ptr = $0;
            var key2Ptr = $1;

            // TODO
            setValue(key1Ptr, 1, 'i32');
            setValue(key2Ptr, 1, 'i32');

        }, key1, key2);
    }

    // =======================================================================
    // FILE
    // =======================================================================
    int open(const char *path, int flags) {
        // Check if the file exists in the Emscripten virtual file system
        EM_ASM({
            Module.fileExists = function(path) {
                return FS.analyzePath(path).exists;
            };
        });

        if (!EM_ASM_INT({ return Module.fileExists(Pointer_stringify($0)); }, path)) {
            // File not found
            return -1;
        }

        // Open the file for reading (assuming 'O_RDONLY' flag)
        return EM_ASM_INT({
            var flags = ($0&1?"r":"")+($0&2?"w":"")+($03&4?"+":"");
            // Open the file and return the file descriptor
            var file = FS.open(Pointer_stringify($0), flags);
            return file.fd;
        }, path, flags);
    }
}

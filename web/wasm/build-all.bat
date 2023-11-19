@ECHO OFF &SETLOCAL

set SOURCE_FILES=

for /r "../../pvm" %%i in (*.c *.cpp) do (
    echo "%%i"
    call set "SOURCE_FILES=%%SOURCE_FILES%% %%i"
)

call set "SOURCE_FILES=%%SOURCE_FILES%% ../../main.cpp"


set OUTPUT_DIR=../public/hello.js
set INC_FLAGS=-I include -I ../../pvm/h/

echo SOURCE_FILES=%SOURCE_FILES%

:: debug ? -O0 -g4 : -Oz -g0 -DNDEBUG
set CFLAGS=-Oz -g0 -DNDEBUG -fdata-sections -ffunction-sections -Dmain=runMain
set JSFLAGS=-s EXPORT_ES6=1 -s MODULARIZE=1 -s ENVIRONMENT='web' -s USE_SDL=2 -s WASM=0 -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap', 'run', 'UTF8ToString']" -s EXPORTED_FUNCTIONS="['_runMain','_free','_malloc']" -s NO_DISABLE_EXCEPTION_CATCHING --bind --pre-js hello.pre.js --post-js hello.post.js --extern-pre-js hello.pre.js  -s ASSERTIONS=0 --js-library sdk.js -s TOTAL_MEMORY=16777216 -s MAXIMUM_MEMORY=16777216 -s ALLOW_MEMORY_GROWTH=1


emcc %INC_FLAGS% %SOURCE_FILES% %CFLAGS% -o %OUTPUT_DIR% %JSFLAGS% 


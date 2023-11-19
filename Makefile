# run `make all` to compile the .hhk and .bin file, use `make` to compile only the .bin file.
# The .hhk file is the original format, the bin file is a newer format.
APP_NAME:=PyVM

ifdef EMSCRIPTEN
	SDK_DIR=web/wasm
else
	ifndef SDK_DIR
	$(error You need to define the SDK_DIR environment variable, and point it to the sdk/ folder)
	endif
endif

CWD=/workspaces/CPJVM

AS:=sh4-elf-as
AS_FLAGS:=

ifndef EMSCRIPTEN
	CC:=sh4-elf-gcc
	CC_FLAGS:=-ffreestanding -fshort-wchar -Wall -Wextra -O2 -I $(SDK_DIR)/include/ -I $(SDK_DIR)/newlib/sh-elf/include/ -I $(CWD)/pvm/h/

	CXX:=sh4-elf-g++
	CXX_FLAGS:=-ffreestanding -fno-exceptions -fno-rtti -fshort-wchar -Wall -Wextra -O2 -fpermissive -I $(SDK_DIR)/include/ -m4a-nofpu -I $(SDK_DIR)/newlib/sh-elf/include/ -I $(CWD)/pvm/h/ 

	LD:=sh4-elf-gcc
	LD_FLAGS:=-nostartfiles -m4-nofpu -Wno-undef -L$(SDK_DIR)/newlib/sh-elf/lib/ -lm -lc

	READELF:=sh4-elf-readelf
	OBJCOPY:=sh4-elf-objcopy
else
	CC_FLAGS:=-Wall -Wextra -I $(SDK_DIR)/include/ -I pvm/h/ -Oz -fdata-sections -ffunction-sections -Dmain=runMain

	CXX_FLAGS:=-Wall -Wextra -I $(SDK_DIR)/include/ -I pvm/h/ -Oz -fdata-sections -ffunction-sections -Dmain=runMain

	LD_FLAGS:=-nostartfiles -m32 -Wl,--gc-sections -lm -lc

	CFLAGS+=-Oz -fdata-sections -ffunction-sections -Dmain=runMain
	JSFLAGS:=-s EXPORT_ES6=1 -s MODULARIZE=1 -s ENVIRONMENT='web' -s USE_SDL=2 -s WASM=0 -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap', 'run', 'UTF8ToString']" -s EXPORTED_FUNCTIONS="['_runMain','_free','_malloc']" -s NO_DISABLE_EXCEPTION_CATCHING --bind --pre-js $(SDK_DIR)/hello.pre.js --post-js $(SDK_DIR)/hello.post.js --extern-pre-js $(SDK_DIR)/hello.pre.js  -s ASSERTIONS=0 --js-library $(SDK_DIR)/sdk.js -s TOTAL_MEMORY=16777216 -s MAXIMUM_MEMORY=16777216 -s ALLOW_MEMORY_GROWTH=1

	CC:=emcc -g $(JSFLAGS)
	LD:=emcc -g $(JSFLAGS)
endif

AS_SOURCES:=$(wildcard *.s)
CC_SOURCES:=$(wildcard *.c)
CC_SOURCES +=$(wildcard pvm/*.c)
CXX_SOURCES:=$(wildcard *.cpp)
CXX_SOURCES +=$(wildcard pvm/*.cpp)

ifdef EMSCRIPTEN
	OBJECTS:=$(CC_SOURCES:.c=.o) $(CXX_SOURCES:.cpp=.o)
else
	OBJECTS:=$(AS_SOURCES:.s=.o) $(CC_SOURCES:.c=.o) $(CXX_SOURCES:.cpp=.o)
endif

APP_ELF:=$(APP_NAME).hhk
APP_BIN:=$(APP_NAME).bin
APP_WEB:=$(APP_NAME).js

bin: $(APP_BIN) Makefile

hhk: $(APP_ELF) Makefile

web: $(APP_WEB) Makefile

all: $(APP_ELF) $(APP_BIN) Makefile

clean:
	rm -f *.o **/*.o $(APP_ELF) $(APP_BIN)

$(APP_ELF): $(OBJECTS) $(SDK_DIR)/sdk.o linker_hhk.ld
	$(LD) -T linker_hhk.ld -o $@ $(LD_FLAGS) $(OBJECTS) $(SDK_DIR)/sdk.o
	$(OBJCOPY) --set-section-flags .hollyhock_name=contents,strings,readonly $(APP_ELF) $(APP_ELF)
	$(OBJCOPY) --set-section-flags .hollyhock_description=contents,strings,readonly $(APP_ELF) $(APP_ELF)
	$(OBJCOPY) --set-section-flags .hollyhock_author=contents,strings,readonly $(APP_ELF) $(APP_ELF)
	$(OBJCOPY) --set-section-flags .hollyhock_version=contents,strings,readonly $(APP_ELF) $(APP_ELF)

$(APP_BIN): $(OBJECTS) $(SDK_DIR)/sdk.o linker_bin.ld
	$(LD) -Wl,--oformat=binary -T linker_bin.ld -o $@ $(LD_FLAGS) $(OBJECTS) $(SDK_DIR)/sdk.o

$(APP_WEB): $(OBJECTS)
	$(LD) -o web/dist/$@ $(LD_FLAGS) $(OBJECTS) $(JSFLAGS) $(SDK_DIR)/sdk.o

# We're not actually building sdk.o, just telling the user they need to do it
# themselves. Just using the target to trigger an error when the file is
# required but does not exist.
$(SDK_DIR)/sdk.o:
	$(error You need to build the SDK before using it. Run make in the SDK directory, and check the README.md in the SDK directory for more information)

%.o: %.s
	$(AS) $< -o $@ $(AS_FLAGS)

%.o: %.c
	$(CC) -c $< -o $@ $(CC_FLAGS)

# Break the build if global constructors are present:
# Read the sections from the object file (with readelf -S) and look for any
# called .ctors - if they exist, give the user an error message, delete the
# object file (so that on subsequent runs of make the build will still fail)
# and exit with an error code to halt the build.
ifndef EMSCRIPTEN
%.o: %.cpp
	$(CXX) -c $< -o $@ $(CXX_FLAGS)
	@$(READELF) $@ -S | grep ".ctors" > /dev/null && echo "ERROR: Global constructors aren't supported." && rm $@ && exit 1 || exit 0
else
%.o: %.cpp
	$(CXX) -c $< -o $@ $(CXX_FLAGS)
endif

.PHONY: bin hhk all clean
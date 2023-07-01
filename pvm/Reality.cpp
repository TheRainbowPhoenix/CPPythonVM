#include "include/Reality.h"
#include "sdk/os/debug.hpp"

void Reality::instantiate() {
  Debug_Printf(0, 2, false, 0, "..:: REALiTY ::.. ");
}

void Reality::destroy() { Debug_Printf(0, 4, false, 0, "::.. DESTR0Y ..:: "); }
#include <sdk/os/debug.hpp>
#include <sdk/os/lcd.hpp>
#include <stddef.h>

#include "h/Messages.h"

void CPPAlertUser(const char *message) {
  Debug_Printf(0, 10, 0, 0, "%s", message);
  LCD_Refresh();
}

void CPPrintNumber(int n) { Debug_Printf(0, 11, false, 0, "Number: %d ", n); }
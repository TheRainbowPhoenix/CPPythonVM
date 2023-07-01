// PC

#include <stdlib.h>

void AlertUser(const char *message) {
  Debug_Printf(0, 10, 0, 0, "%s", message);
  LCD_Refresh();
}

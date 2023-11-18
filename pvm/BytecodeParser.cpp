#include "./h/BytecodeParser.h"

void *BytecodeParser::parse() {

  const int maxRows = 42;
  const int maxColumns = 50;

  int row = 3;
  int col = 0;

  for (int i = 0; i < size; ++i) {

    // Print each byte as hex
    Debug_Printf(col, row, false, 0, "%02X", bc[i]);

    col += 2;

    if (col == maxColumns) {
      col = 0;
      ++row;

      // Check if reached the maximum rows
      if (row == maxRows) {
        // You may choose to break here or handle it as needed
        break;
      }
    }
  }

  return 0;
}

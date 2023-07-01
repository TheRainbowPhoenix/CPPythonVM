#ifndef BYTECODE_PARSER_H
#define BYTECODE_PARSER_H

#include <sdk/os/debug.hpp>

class BytecodeParser {

private:
  uint8_t *bc;

public:
  BytecodeParser(uint8_t *bc) : bc(bc) {}

  void *parse();
};

#endif
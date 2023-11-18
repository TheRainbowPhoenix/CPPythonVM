#ifndef BYTECODE_PARSER_H
#define BYTECODE_PARSER_H

#include <sdk/os/debug.hpp>

class BytecodeParser {

private:
  uint8_t *bc;
  int size;

public:
  BytecodeParser(uint8_t *bc, int size) : bc(bc), size(size) {}
  

  void *parse();
};

#endif
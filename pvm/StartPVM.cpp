#include <sdk/os/debug.hpp>
#include <sdk/os/lcd.hpp>
#include <stddef.h>
#include <string.h>

#include "./h/BytecodeParser.h"
#include "./h/Map.h"
#include "./h/Messages.h"
#include "./h/PInteger.h"
#include "./h/Reality.h"

// int StartPVM(int argc, char *argv[]) {
int StartPVM(uint8_t *bc, unsigned int size) {
  volatile int returnValue = 0;

  // CPPAlertUser("TODO: PVM_Start");
  Reality::instantiate();

  PInteger *a = new PInteger(42);
  int check = a->value() == 42 ? 10000 : 0;

  Map<const char *, int> *myMap = new Map<const char *, int>();
  myMap->insert("k1", 10);
  myMap->insert("k2", 20);
  myMap->insert("k3", 30);

  check += (myMap->size() == 3 ? 1000 : 0);

  check += (myMap->has_key("k2") ? 100 : 0);

  myMap->remove("k1");

  check += (myMap->has_key("k1") ? 0 : 10);

  CPPrintNumber(check);

  delete myMap;

  BytecodeParser parser(bc, size);
  parser.parse();

  // returnValue = KVM_Start(argc, argv);
  // KVM_Cleanup();

  Reality::destroy();
  return returnValue;
}
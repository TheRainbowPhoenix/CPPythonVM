#include "h/Reality.h"
#include "./h/Map.h"
#include "./h/Messages.h"
#include "./h/PInteger.h"
#include <stddef.h>
#include <string.h>

PInteger *Reality::P_True;
PInteger *Reality::P_False;
PObject *Reality::P_None;

void Reality::instantiate() {
  P_False = new PInteger(0);
  P_True = new PInteger(1);
  P_None = new PObject();

  Map<const char *, PObject *> *pclass_dict =
      new Map<const char *, PObject *>();
  pclass_dict->insert("test", P_None);
  CPPAlertUser("instantiate");
}

void Reality::destroy() { CPPAlertUser("::.. DESTR0Y ..::"); }
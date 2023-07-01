#include "./h/PInteger.h"
#include "./h/Reality.h"

IntegerPClass *IntegerPClass::_instance = 0;

IntegerPClass::IntegerPClass() {
  // set_name(new PString("int"))
}

IntegerPClass *IntegerPClass::get_instance() {
  if (_instance == 0) {
    _instance = new IntegerPClass();
  }
  return _instance;
}

PInteger::PInteger(int value) : _value(value) {
  set_class(IntegerPClass::get_instance());
}
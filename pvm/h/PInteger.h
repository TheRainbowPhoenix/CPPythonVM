#ifndef P_INTEGER_H
#define P_INTEGER_H

#include "./PClass.h"
#include "./PObject.h"

class IntegerPClass : public PClass {
private:
  IntegerPClass();
  static IntegerPClass *_instance;

public:
  static IntegerPClass *get_instance();
  void initialize();
  // TODO: add, sub, mul, div, mod, lt, le, eq, ne, gt, ge ..., print
};

class PInteger : public PObject {
private:
  int _value;

public:
  void print() {
    // TODO: queue to print _value
  }
  PInteger(int value);
  int value() { return _value; }
};

#endif
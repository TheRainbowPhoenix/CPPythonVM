#ifndef REALITY_H
#define REALITY_H

class PInteger;
class PObject;

class Reality {
public:
  static PInteger *P_True;
  static PInteger *P_False;
  static PObject *P_None;

  static void instantiate();
  static void destroy();
};

#endif
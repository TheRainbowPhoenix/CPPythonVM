#ifndef P_OBJECT_H
#define P_OBJECT_H

#include "PClass.h"
#include <assert.h>

class PObject {
private:
  PClass *_pclass;

public:
  PClass *pclass() {
    assert(_pclass != 0);
    return _pclass;
  }

  void set_class(PClass *pc) { _pclass = pc; }
};

#endif
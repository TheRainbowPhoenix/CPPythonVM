#include <sdk/os/debug.hpp>
#include <sdk/os/lcd.hpp>
#include <stddef.h>

void CPPAlertUser(const char *message) {
  Debug_Printf(0, 10, 0, 0, "%s", message);
  LCD_Refresh();
}

/*=========================================================================
 * FUNCTION:      KVM_Start
 * TYPE:          private operation
 * OVERVIEW:      Initialize everything.  This operation is called
 *                when the VM is launched.
 * INTERFACE:
 *   parameters:  command line parameters
 *   returns:     zero if everything went well, non-zero otherwise
 *=======================================================================*/

int KVM_Start(int argc, char *argv[]) {
  volatile int returnValue = 0; /* Needed to make compiler happy */

  return returnValue;
}

/*=========================================================================
 * FUNCTION:      StartJVM
 * TYPE:          public global operation
 * OVERVIEW:      Boots up the virtual machine and executes 'main'.
 * INTERFACE:
 *   parameters:  command line arguments
 *   returns:     zero if everything went fine, non-zero otherwise.
 *=======================================================================*/

int StartPVM(int argc, char *argv[]) {
  volatile int returnValue = 0;

  /* Ensure that we have a class to run */
  if (argc <= 0 || argv[0] == NULL) {
    CPPAlertUser("KVM_MSG_MUST_PROVIDE_CLASS_NAME");
    return -1;
  }

  CPPAlertUser("TODO: PVM_Start");
  // returnValue = KVM_Start(argc, argv);
  // KVM_Cleanup();
  return returnValue;
}
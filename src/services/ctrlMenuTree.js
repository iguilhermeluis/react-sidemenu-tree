/* controlador de reações no chat */

import { Subject } from 'rxjs';

const subject = new Subject();

const CtrlMenuTree = {
  send: (message) => subject.next({ value: message }),
  clear: () => subject.next(),
  get: () => subject.asObservable(),
};

export default CtrlMenuTree;

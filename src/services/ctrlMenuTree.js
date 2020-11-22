import { Subject } from "rxjs";

const subject = new Subject();

export const CtrlMenuTree = {
  send: (message) => subject.next({ value: message }),
  clear: () => subject.next(),
  get: () => subject.asObservable(),
};

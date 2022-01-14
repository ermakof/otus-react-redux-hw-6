import { compose, fromPairs, map, split, tail } from 'ramda';

export type QsObj = any;

export const parseQs = (qs: string): QsObj => {
  const f0 = tail;
  const f1 = split('&');
  const f2 = map(split('='));
  const f3 = fromPairs;

  // TODO TS2769: No overload matches this call.
  //  Argument of type '[(list: readonly string[]) => string[][], (str: string) => string[], { (list: string): string; <T extends unknown>(list: readonly T[]): T[]; }]'
  //  is not assignable to parameter of type '[...func: ((a: any) => any)[], f7: (a: unknown) => unknown, f6: (a: unknown) => unknown, f5: (a: unknown) => unknown, f4: (a: unknown) => unknown, f3: (a: unknown) => unknown, f2: (a: unknown) => unknown, f1: (...args: any[]) => unknown]'.
  //  Source has 3 element(s) but target requires 7.
  //  Overload 2 of 9, '(f4: (a: string[][]) => unknown, f3: (a: string[]) => string[][], f2: (a: string) => string[], f1: (list: readonly unknown[]) => string): (list: readonly unknown[]) => unknown', gave the following error.
  //  Argument of type '<V>(a: Array<KeyValuePair<string, V>>) => { [index: string]: V; }' is not assignable to parameter of type '(a: string[][]) => unknown'.
  //  Types of parameters 'a' and 'a' are incompatible. Type 'string[][]' is not assignable to type 'KeyValuePair<string, string>[]'.
  //  Type 'string[]' is not assignable to type 'KeyValuePair<string, string>'.
  //  Target requires 2 element(s) but source may have fewer.
  // @ts-ignore
  return compose(f3, f2, f1, f0)(qs);
};

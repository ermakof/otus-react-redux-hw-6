import { compose, concat, join, toPairsIn } from 'ramda';

export type QsObj = Record<string, string | number | boolean>;

export const createQs = (qsObj: QsObj): string => {
  const f0 = toPairsIn;
  const f1 = (o: Array<[string, string]>) => o.map(([k, v]) => `${k}=${v}`);
  const f2 = join('&');
  const f3 = concat('?');
  return compose(f3, f2, f1, f0)(qsObj);
};

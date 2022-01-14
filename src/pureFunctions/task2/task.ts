export type Obj = Record<string, string | number | boolean>;

export const createQs = (o: Obj): string =>
  Object.keys(o).reduce((a, c, i) => `${a}${(i && '&') || ''}${c}=${o[c]}`, '?');

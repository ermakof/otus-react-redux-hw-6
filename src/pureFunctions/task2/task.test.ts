import { createQs, Obj } from './task';

test('createQs', () => {
  const qsObj: Obj = {
    page: '2',
    pageSize: '10',
    total: '205',
    somethingElse: 'value',
  };

  expect(createQs(qsObj)).toBe('?page=2&pageSize=10&total=205&somethingElse=value');
});

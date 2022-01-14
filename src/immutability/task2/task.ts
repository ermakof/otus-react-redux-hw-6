export const originalArrayToExpectedArray = (
  originalArray: Readonly<number[]>
): (number | string)[] => ['two', ...originalArray.slice(2), 5];

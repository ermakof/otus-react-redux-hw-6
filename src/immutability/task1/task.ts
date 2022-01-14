// Задание 1

// Используя чистые функции массивов map/reduce, объектов Objeсt.keys, строк string.split и т.д. получить нужный результат
// Лучшая команда (наибольшее кол-во очков), выводим имя

export type OriginalTeam = {
  name: string;
  league: string;
  size: number;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => ({
  name: 'New York Badgers',
  league: originalTeam.league || '',
  roster: 25,
});

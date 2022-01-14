import { compose, sort } from 'ramda';

export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const getTeamName = (team: Team) => team.name;
  const sortTeam = sort((a: Team, b) => b.score - a.score);
  const getTopTeam = (a: Array<Team>) => a[0];
  return compose(getTeamName, getTopTeam, sortTeam)(teams);
};

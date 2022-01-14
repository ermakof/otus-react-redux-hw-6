export interface Team {
  name: string;
  captain: {
    name: string;
    age: number;
  };
}

export const originalTeamToExpectedTeam = (team: Readonly<Team>): Team => ({
  ...team,
  captain: { ...team.captain, age: 28 },
});

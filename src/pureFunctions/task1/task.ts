export type Team = {
  score: number;
  name: string;
};

export const getTopName = (t: Team[] = []): string => t.sort((a, b) => b.score - a.score)[0]?.name;

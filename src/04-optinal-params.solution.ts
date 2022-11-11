export const getName = (first: string, last?: string): string => {
  return last ? `${first} ${last}` : `${first}`;
};

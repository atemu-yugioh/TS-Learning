type getNameAgrs = {
  first: string;
  last?: string;
};

export const getName = (params: getNameAgrs): string => {
  return params.last ? `${params.first} ${params.last}` : params.first;
};

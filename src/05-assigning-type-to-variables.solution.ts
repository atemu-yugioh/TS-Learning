export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Nguyen",
  lastName: "Thieng",
  isAdmin: true,
};

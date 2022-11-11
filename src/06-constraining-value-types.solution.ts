interface User {
  id: number;
  firstName: string;
  lastName: string;
  Role: Role;
}

type Role = "admin" | "user" | "supper-admin";

const defaultUser: User = {
  id: 1,
  firstName: "Nguyen",
  lastName: "Thieng",
  Role: "user",
};

defaultUser.Role = "admin";

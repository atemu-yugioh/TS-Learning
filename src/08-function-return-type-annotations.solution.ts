interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const makeUser = (): User => {
  return {
    id: 1,
    firstName: "Nguyen",
    lastName: "Thieng",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "title 1",
      },
    ],
  };
};

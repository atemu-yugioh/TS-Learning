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

export const makeUser = () => {
  return {
    id: 1,
    firstName: "Nguyen",
    lastName: "Thieng",
    role: "admin",
  };
};

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */

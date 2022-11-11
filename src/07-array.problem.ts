import { Role } from "./06-constraining-value-types.solution";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  posts: Post;
}

interface Post {
  id: number;
  title: string;
}

// export const user: User = {
//   id: 1,
//   firstName: "Nguyen",
//   lastName: "Thieng",
//   role: "admin",
//   posts: [
//     {
//       id: 1,
//       title: "Post 1",
//     },
//     {
//       id: 2,
//       title: "Post 2",
//     },
//   ],
// };

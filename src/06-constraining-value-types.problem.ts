interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Nguyen",
  lastName: "Thieng",
  // @ts-expect-error
  role: 10,
};

// Problem
// mong muốn roles chỉ nhận các giá trị ("admin","user","supper-admin") nếu khác các giá trị này báo lỗi

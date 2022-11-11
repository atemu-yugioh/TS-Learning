export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const defaultUser = {
  id: 1,
  firstName: "Nguyen",
  lastName: "Thieng",
  isAdmin: true,
};

// Problem
// biến defaultUser khi không được gán biến thì code vẫn thực thi và test vẫn pass
// nhưng trong trường hợp lỡ thiếu field id thì code sẽ không báo lỗi mà phải đợi đến khi thực thi code lên thì mới báo lỗi
// gán type cho biến giúp báo lỗi ngay lặp tức nếu biến defaultUser bị thiếu 1 field nào đó so với type mà nó được gán
//  => giúp nhìn thấy lỗi ngay khi code, fix ngay trong lúc code
//  => giúp code chặt chẽ hơn

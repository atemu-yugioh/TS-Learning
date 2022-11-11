export const getName = (first: string, last: string): string => {
  return last ? `${first} ${last}` : `${first}`;
};

// Problem
// getName("Nguyen"); ==> error: An argument for 'last' was not provided

// khi sử dụng toán tử optinal cho parameter thì tham số được khái báo optional phải đứng cuối trong danh sách tham số truyền vào

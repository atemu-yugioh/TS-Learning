export const addTwoNumbersUseObjectParams = (params) => {
  return params.first + params.second;
};

// # Problem

// Biên dịch sang js chạy được (tsc 02-object-params.problem.ts ==> node 02-object-params.problem.ts);
// test case vẫn pass
// NHƯNG: trong ts thì tham số params không hợp lệ
//      ==> Parameter 'params' implicitly has an 'any' type.
// tham số đầu vào là 1 object params cũng phải có kiểu dữ liệu cụ thể

// params : {first:number, second: number}

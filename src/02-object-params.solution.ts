// Solution 1: truyền trực tiếp type

export const addTwoNumbersUseObjectParamsSolution = (params: {
  first: number;
  second: number;
}): number => {
  return params.first + params.second;
};

// solution 2: khai báo 1 type cụ thể có thể sử dụng được nhiều lần sau này

type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbersUseObjectParamsTypeSollution = (
  params: AddTwoNumbersArgs
): number => {
  return params.first + params.second;
};

// solution 3: khai báo 1 interface cụ thể có thể sử dụng được nhiều lần sau này

interface IAddTwoNumbersArgs {
  first: number;
  second: number;
}

export const addTwoNumbersUseObjectParamsInterfaceSolution = (
  params: IAddTwoNumbersArgs
): number => {
  return params.first + params.second;
};

// KHÁC NHAU GIỮA TYPE VÀ INTERFACE
// Technically, type can represent anything. It could be a number, or a string, or a boolean.
// vd: type StringOrNumber = string | number
// TypeScript will give you an error if you try to use a string with interface
// vd: interface StringOrNumber = string | number ==> error

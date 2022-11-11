type getNameAgrs = {
  first: string;
  last: string;
};

export const getName = (params: getNameAgrs): string => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }

  return params.first;
};

// Problem
// getName({first: "Nguyen", last: "Thieng"});
// getName({first:"Nguyen"})  ==> error: Argument of type '{ first: string; }' is not assignable to parameter of type 'getNameAgrs'

// OPTINAL PROPERTIES: bằng cách thêm dấu ? vào tên thuộc tính thì chúng ta có thể làm cho thuộc tính đó trở nên linh hoạt hơn.
//                      có nghĩa làm thuộc tính đó có truyền vào để sử dụng hay không thì vẫn được

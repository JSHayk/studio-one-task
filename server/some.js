const obj = {
  name: "Mike",
  age: 48,
};

const { name, ...rest } = obj;
console.log(rest);
console.log(obj);

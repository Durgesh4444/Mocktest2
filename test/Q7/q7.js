const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, cur) => {
  acc.push(cur);
  return acc;
}, []);

console.log(reversedArr); // [5, 4, 3, 2, 1]
let arr = [];
let sarr = [];
let newArr = [];

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n] + strings[i]);
    sarr = arr.sort();
  }
  newArr.push(...sarr.map((item) => item.slice(1)));
  console.log(newArr);
  return newArr;
}
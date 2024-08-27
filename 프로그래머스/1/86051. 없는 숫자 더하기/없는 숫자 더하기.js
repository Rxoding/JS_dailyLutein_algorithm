function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!numbers.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  const hap = newArr.reduce((a, b) => a + b);
  return hap;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

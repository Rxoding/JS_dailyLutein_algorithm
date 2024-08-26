function solution(arr, divisor) {
  const sortArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      sortArr.push(arr[i]);
    }
  }
  // console.log(sortArr);
  if (sortArr.length === 0) {
    sortArr.push(-1);
    return sortArr;
  }
  sortArr.sort((a, b) => a - b);
  return sortArr;
}
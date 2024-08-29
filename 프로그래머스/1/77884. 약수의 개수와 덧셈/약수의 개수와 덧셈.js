function solution(left, right) {
  const arr = [];
  let divisor = [];
  let answer = 0;
  for (let i = 0; i < Math.abs(right - left) + 1; i++) {
    arr.push(Math.min(left, right) + i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) divisor.push(arr[i]);
    }
    divisor.length % 2 === 0 ? (answer += arr[i]) : (answer -= arr[i]);
    divisor = [];
  }

  return answer;
}

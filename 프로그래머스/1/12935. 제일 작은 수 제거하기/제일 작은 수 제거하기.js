function solution(arr) {
  const min = Math.min(...arr);
  let answer = arr.filter((num) => num !== min);
  return arr.length === 1 ? [-1] : answer;
}
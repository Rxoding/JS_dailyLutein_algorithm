function solution(n) {
  let trit = [];

  // 3진법으로 변환
  while (n > 0) {
    trit.push(n % 3);
    n = Math.floor(n / 3);
  }

  // 3진법 숫자를 뒤집어서 10진법으로 변환
  let result = 0;
  for (let i = 0; i < trit.length; i++) {
    result += trit[i] * 3 ** (trit.length - 1 - i);
  }

  return result;
}
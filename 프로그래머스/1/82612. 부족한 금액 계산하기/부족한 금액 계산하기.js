function solution(price, money, count) {
  let hap = 0;
  for (let i = 1; i <= count; i++) {
    hap += price * i;
  }
  let answer = hap - money;

  return answer <= 0 ? 0 : answer;
}

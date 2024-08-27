function solution(n) {
  let w = "수";
  let m = "박";
  return n % 2 === 0 ? (w + m).repeat(n / 2) : (w + m).repeat(n / 2) + w;
}
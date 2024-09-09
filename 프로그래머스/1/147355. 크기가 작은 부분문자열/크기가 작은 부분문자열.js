function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let num = t.slice(i, i + p.length);
    console.log(num);
    num <= p ? result++ : null;
  }
  return result;
}
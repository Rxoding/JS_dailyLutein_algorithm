function solution(n, m) {
  let gcdArr = [];
  let lcmArr = [];
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
    lcmArr.push(n * i);
    lcmArr.push(m * i);
  }
  let gcd = Math.max(...gcdArr);
  let lcmDup = lcmArr.filter((item, index) => lcmArr.indexOf(item) !== index);
  let lcm = Math.min(...lcmDup);
  return [gcd, lcm];
}
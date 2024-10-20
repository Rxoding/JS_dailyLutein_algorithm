function solution(n, m, section) {
  let s = 1;
  let current = section[0];
  for (let i = 0; i < section.length; i++) {
    if (current + m - 1 < section[i]) {
      s++;
      current = section[i];
    }
  }
  return s;
}
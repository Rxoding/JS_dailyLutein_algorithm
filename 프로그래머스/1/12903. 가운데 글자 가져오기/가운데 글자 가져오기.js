function solution(s) {
  const mid = Math.floor(s.length / 2);
  let answer = s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
  return answer;
}

console.log(solution("qwer"));

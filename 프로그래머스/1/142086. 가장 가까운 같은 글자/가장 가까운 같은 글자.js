function solution(s) {
  const answer = [];
  const arr = s.split('');
  for (let i = 0; i < s.length; i++) {
    let a = arr.slice(0, i);
    if (!a.includes(arr[i])) {
      answer.push(-1);
    } else {
      let ra = a.reverse();
      let x = 0;
      for (let j = 0; j < a.length; j++) {
        x++;
        if (arr[i] === ra[j]) {
          break;
        }
      }
      answer.push(x);
    }
  }
  return answer;
}
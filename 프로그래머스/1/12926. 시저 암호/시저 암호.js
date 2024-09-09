function solution(s, n) {
  let answer = '';
  let bAnswer = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = '';
    let low = s.toLowerCase();
    charCode = low.charCodeAt(i);
    let newCharCode = charCode + n;
    if (newCharCode > 122) {
      newCharCode = 97 + newCharCode - 123;
    }
    bAnswer += String.fromCharCode(newCharCode);
    if (s[i] === s[i].toUpperCase() && s[i] !== ' ') {
      answer += bAnswer[i].toUpperCase();
    } else if (low[i] === ' ') {
      answer += ' ';
    } else if (s[i] !== s[i].toUpperCase()) {
      answer += bAnswer[i];
    }
  }
  return answer;
}
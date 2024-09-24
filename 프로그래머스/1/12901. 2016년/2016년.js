function solution(a, b) {
  const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let totalDay = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDay += dayInMonth[i];
  }
  totalDay += b - 1;

  const answer = dayOfWeek[totalDay % 7];

  return answer;
}
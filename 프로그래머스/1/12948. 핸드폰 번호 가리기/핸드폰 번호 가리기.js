function solution(phone_number) {
  answer =
    "*".repeat(phone_number.slice(0, -4).length) + phone_number.slice(-4);
  return answer;
}
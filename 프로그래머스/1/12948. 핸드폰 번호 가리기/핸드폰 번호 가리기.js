function solution(phone_number) {
  const frontNumber = phone_number.slice(0, -4);
  answer =
    frontNumber.replace(frontNumber, "*".repeat(frontNumber.length)) +
    phone_number.slice(-4);
  return answer;
}
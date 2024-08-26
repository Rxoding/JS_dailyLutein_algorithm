function solution(num) {
  let count = 0;
  while (count < 500) {
    if (num === 1) {
      return count;
    }
    if (num % 2 === 0) {
      num = num / 2;
      console.log("짝", count, num);
    } else {
      num = num * 3 + 1;
      console.log("홀", count, num);
    }
    count++;
  }
  return -1;
}

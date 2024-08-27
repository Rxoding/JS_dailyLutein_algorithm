function solution(numbers) {
  let hap = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      hap += i;
    }
  }
  return hap;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

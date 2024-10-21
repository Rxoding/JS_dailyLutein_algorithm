function solution(number, limit, power) {
  let knights = [];

  // 약수를 효율적으로 계산하여 knights 배열에 저장
  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    // i의 약수를 구할 때 제곱근까지만 확인
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divisor++;  // j는 약수
        if (j !== i / j) {
          divisor++;  // i / j도 약수 (같지 않을 때만)
        }
      }
    }
    knights.push(divisor);
  }

  // reduce를 사용하여 배열의 합을 구하면서, limit을 초과하면 power로 대체
  const totalPower = knights.reduce((sum, knight) => {
    if (knight > limit) {
      return sum + power;
    } else {
      return sum + knight;
    }
  }, 0);

  return totalPower;
}

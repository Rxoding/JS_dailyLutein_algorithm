function solution(nums) {
  const hap = [];
  let prime = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        hap.push(sum);
      }
    }
  }
  for (let i = 0; i < hap.length; i++) {
    let factors = 0;
    let j = 1;
    while (j <= hap[i]) {
      if (hap[i] % j === 0) {
        factors++;
        j++;
      } else {
        j++;
        continue;
      }
    }
    if (factors === 2) {
      prime++;
    }
  }

  return prime;
}
function solution(arr) {
  let answer = 0;

  // 배열의 세 개의 숫자 조합을 찾기 위한 세 중첩 반복문
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          console.log(`0을 만드는 조합: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
          answer++;
        }
      }
    }
  }

  return answer;
}


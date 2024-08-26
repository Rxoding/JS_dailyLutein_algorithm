function solution(seoul) {
  let spot = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      spot = i;
    }
  }
  return `김서방은 ${spot}에 있다`;
}
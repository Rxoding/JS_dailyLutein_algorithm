function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    for (let j = 0; j < 1; j++) {
      let sortArr = array
        .slice(commands[i][j] - 1, commands[i][j + 1])
        .sort((a, b) => a - b);
      console.log(sortArr);
      answer.push(sortArr[commands[i][j + 2] - 1]);
    }
  }
  return answer;
}
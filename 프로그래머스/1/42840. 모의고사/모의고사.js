function solution(answers) {
  let A = 0;
  let B = 0;
  let C = 0;
  const caseA = [1, 2, 3, 4, 5];
  const caseB = [2, 1, 2, 3, 2, 4, 2, 5];
  const caseC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === caseA[i % caseA.length]) {
      A++;
    }
    if (answers[i] === caseB[i % caseB.length]) {
      B++;
    }
    if (answers[i] === caseC[i % caseC.length]) {
      C++;
    }
  }
  const highScorer = [];
  console.log(A, B, C);
  const highScore = Math.max(A, B, C);
  if (highScore === A) {
    highScorer.push(1);
  }
  if (highScore === B) {
    highScorer.push(2);
  }
  if (highScore === C) {
    highScorer.push(3);
  }

  return highScorer;
}
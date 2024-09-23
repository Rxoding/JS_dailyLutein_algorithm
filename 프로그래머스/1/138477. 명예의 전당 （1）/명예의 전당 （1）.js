function solution(k, score) {
  const kScore = [];
  let top3kScore = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    let recentScore = score[i];
    kScore.push(recentScore);
    kScore.sort((a, b) => b - a);
    for (let j = 0; j < k; j++) {
      if (kScore[j] === undefined) {
        break;
      }
      top3kScore.push(kScore[j]);
    }
    answer.push(Math.min(...top3kScore));
    top3kScore = [];
  }
  return answer;
}
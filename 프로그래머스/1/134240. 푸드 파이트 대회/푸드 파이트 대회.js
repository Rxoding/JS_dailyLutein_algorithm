function solution(food) {
  const answer = [];
  for (let j = 0; j < food[0]; j++) {
    answer.push(0);
  }
  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 !== 0) {
      food[i] = food[i] - 1;
    }
    for (let j = 0; j < food[i] / 2; j++) {
      answer.push(i);
      answer.unshift(i);
    }
  }

  return answer.join('');
}
function solution(cards1, cards2, goal) {
  while (goal.length > 0) {
    if (goal[0] === cards1[0]) {
      goal.splice(0, 1);
      cards1.splice(0, 1);
      console.log('1에서 삭제', goal, cards1);
    } else if (goal[0] === cards2[0]) {
      goal.splice(0, 1);
      cards2.splice(0, 1);
      console.log('2에서 삭제', goal, cards2);
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
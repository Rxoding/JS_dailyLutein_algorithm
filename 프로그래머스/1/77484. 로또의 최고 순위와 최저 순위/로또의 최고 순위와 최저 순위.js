function solution(lottos, win_nums) {
  let success = 0;
  let zeroNum = 0;
  // 로또를 몇개 맞췄는지 확인
  for (const lotto of lottos) {
    if (win_nums.includes(lotto) === true) {
      success++;
    } else if (lotto === 0) {
      zeroNum++;
    }
  }
  let maxSuccess = success + zeroNum;
  console.log(success, zeroNum, maxSuccess);
  let result = [];
  // lottos의 0에서 0대신 다른 숫자가 들어갈 시 최대 당첨 갯수, 최소 당첨 갯수
  if (maxSuccess === 2) {
    result.push(5);
  } else if (maxSuccess === 3) {
    result.push(4);
  } else if (maxSuccess === 4) {
    result.push(3);
  } else if (maxSuccess === 5) {
    result.push(2);
  } else if (maxSuccess === 6) {
    result.push(1);
  } else {
    result.push(6);
  }
  if (success === 2) {
    result.push(5);
  } else if (success === 3) {
    result.push(4);
  } else if (success === 4) {
    result.push(3);
  } else if (success === 5) {
    result.push(2);
  } else if (success === 6) {
    result.push(1);
  } else {
    result.push(6);
  }

  return result;
}
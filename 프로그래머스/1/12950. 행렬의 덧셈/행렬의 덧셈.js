function solution(arr1, arr2) {
  let aArr = [];
  let sArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      sArr.push(arr1[i][j] + arr2[i][j]);
    }
    aArr[i] = sArr;
    sArr = [];
  }
  return aArr;
}
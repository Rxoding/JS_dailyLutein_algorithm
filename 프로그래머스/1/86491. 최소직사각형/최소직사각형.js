function solution(size) {
  let max = [];
  let min = [];
  for (let i = 0; i < size.length; i++) {
    max.push(Math.max(size[i][0], size[i][1]));
    min.push(Math.min(size[i][0], size[i][1]));
  }
  return Math.max(...max) * Math.max(...min);
}
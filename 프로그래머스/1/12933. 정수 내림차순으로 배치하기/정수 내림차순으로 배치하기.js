function solution(n) {
    let arr = n.toString().split("");
    let answer = arr.sort().reverse().join("")*1;
    return answer;
}
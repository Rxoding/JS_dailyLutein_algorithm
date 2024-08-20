function solution(n) {
    let arr = n.toString().split("").map(Number);
    let answer = Number(arr.sort((a,b)=>b-a).join(""));
    console.log(typeof answer);
    return answer;
}
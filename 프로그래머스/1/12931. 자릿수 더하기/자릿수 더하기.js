function solution(n){
    let numbers = n.toString().split('').map(Number)
    let answer = numbers.reduce((total,number)=>total+number,0)
    console.log(answer)
    return answer;
}
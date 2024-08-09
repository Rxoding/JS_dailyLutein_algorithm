function solution(n) {
    let result = 0;
    let arr = [];
    for(let i = 1;i<=n;i++){
        if(n%i === 1){
           arr.push(i);
        }
    }
    console.log(arr)
    result = Math.min(...arr);
    console.log(result)
    return result
}
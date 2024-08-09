function solution(x, n) {
    let arr =[]
    for(let i = 0; i < n; i++){
        result = x+(i*x)
        arr.push(result)
    }
    return arr;
}
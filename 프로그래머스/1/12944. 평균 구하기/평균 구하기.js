function solution(arr) {
    let sum = 0
    for (x of arr){
        sum += x;
    }
    let result = sum/arr.length;
    return result
}
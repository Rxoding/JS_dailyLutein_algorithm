function solution(numbers) {
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    let result = sum/numbers.length;
    return result;
}
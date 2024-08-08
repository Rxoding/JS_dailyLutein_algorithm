function solution(num1, num2) {
    if(num1>=0 && num1 <= 100 && num2 >=0 && num2 <= 100){
        result = num1 / num2;
        result = Math.floor(result) //입출력 예를 보면 몫을 내림해서 출력
        return result;
    }else{
        return '두수가 0보다 작거나 100보다 큽니다.'
    }
}
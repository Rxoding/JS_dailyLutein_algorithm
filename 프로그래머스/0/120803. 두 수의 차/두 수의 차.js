function solution(num1,num2){
    if(Math.abs(num1) <= 50000 && Math.abs(num2) <= 50000){
        result = num1 - num2;
        return result;
    }else{
        return '숫자의 절대값이 50000을 초과합니다.';
    }
}
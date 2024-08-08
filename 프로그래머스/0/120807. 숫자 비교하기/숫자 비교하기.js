function solution(num1, num2) {
    if(num1>=0 && num1<=10000 && num2>=0 && num2<=10000){
        if(num1 == num2){
            return 1
        }else{
            return -1
        }
    }else{
        return("주어진 두 수가 범위를 넘었습니다.")
    }
}
function solution(x) {
    let hsd = 0;
    let arr = x.toString().split("").map(Number);
    let hap = arr.reduce((a,b)=>a+b,0) // 배열의 합을 구할때 reduce를 사용
    if (x%hap === 0){
        return true
    }else{
        return false
    }
}
function solution(a, b) {
    let hap = 0;
    for(let i = 0; i <= Math.max(a,b)-Math.min(a,b); i++){
       hap += Math.min(a,b)+i
    }
    return hap;
}
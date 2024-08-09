function solution(n) {
    let result = 0
    if(n%2==0){
        for (n ;n>0;n-=2){
            result += n;
        } 
    }else{
        for (n = n-1; n>0; n-=2){
            result+=n;
        }
    }
   
     return result
}
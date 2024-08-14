function solution(absolutes, signs) {
    let arr = []
    let hap = 0
    for (let i =0; i < signs.length; i++){
        if(signs[i] === true){
            arr.push(absolutes[i])

        }else{
            arr.push(-absolutes[i])

        }
    }
    arr.forEach(function(item){
            hap += item
    })
    return hap
}
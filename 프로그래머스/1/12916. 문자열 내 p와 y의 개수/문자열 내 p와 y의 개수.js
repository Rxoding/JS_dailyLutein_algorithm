function solution(s){
    let arr = s.split('');
    let pnum = arr.filter(function(i){
        return i === 'p' || i === 'P'
    })
    let ynum = arr.filter(function(i){
        return i === 'y' || i === 'Y'
    })
    if(pnum.length === ynum.length){
        return true
    }else{
        return false
    }
}
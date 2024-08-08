function solution(age) {
    let currentDate = new Date();
    let currentyear = currentDate.getFullYear();
    result = (currentyear-age)-1;   
    return result;
}
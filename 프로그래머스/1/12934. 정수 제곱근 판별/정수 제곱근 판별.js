function solution(n) {
    let sqrt = 0
    sqrt = Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1;
    return sqrt
}
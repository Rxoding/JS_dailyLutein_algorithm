function solution(a, b, n) {
  let cola = 0;

  while (n >= a) {
    let newCola = Math.floor(n / a) * b;  // 이번 교환에서 얻은 콜라 병 수
    cola += newCola;  // 총 받은 콜라 병 수에 추가
    n = (n % a) + newCola;  // 나머지 병과 새로 얻은 병의 합
  }

  return cola;
}
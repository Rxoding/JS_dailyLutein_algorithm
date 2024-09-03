function solution(a, b) {
  let ab = a * b;
  while (b !== 0) {
    let temp = b;
    console.log("temp", temp);
    b = a % b;
    console.log("b", b);
    a = temp;
    console.log("a", a);
  }
  return [a, ab / a];
}
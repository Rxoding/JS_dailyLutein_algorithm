process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const garo = "*".repeat(a)
  const result = garo + `\n${garo}`.repeat(b-1)
  
  console.log(result);
});
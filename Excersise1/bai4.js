function extractTheTwos(n) {
  if (
    (n > 0 && n.toString().length !== 3) ||
    (n < 0 && n.toString().length !== 4)
  )
    return -1;
  return Math.abs(Math.trunc(n / 10) % 10);
}
function extractTheThrees(n) {
  if (
    (n > 0 && n.toString().length !== 3) ||
    (n < 0 && n.toString().length !== 4)
  )
    return -1;
  return Math.abs(Math.trunc(n / 100));
}
console.log(extractTheTwos(123));
console.log(extractTheThrees(123));

function randomNumber(a, b) {
  if (a > b || a <= 0) return -1;
  else return Math.floor(Math.random() * (b - a)) + a;
}

console.log(randomNumber(1, 10));

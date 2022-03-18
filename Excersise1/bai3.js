function maxEven(a, b, c) {
  let temp = [a, b, c];
  let max, vt, i;
  for (i = 0; i < temp.length; i++) {
    if (temp[i] % 2 == 0) {
      vt = i;
      break;
    }
  }
  if (i == temp.length) console.log("không có số chẵn");
  else {
    max = vt;
    for (i = vt + 1; i < temp.length; i++) {
      if (temp[i] % 2 == 0 && temp[i] > temp[max]) {
        max = i;
      }
    }
    console.log(temp[max]);
  }
}

maxEven(10, 12, 13);

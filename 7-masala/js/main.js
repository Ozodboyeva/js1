// begin7
let r1 = +prompt(
  "Radiusni r1 ni kiriting r1 katta bo'lishi kerak r2ga qaraganda"
);
let r2 = +prompt(
  "Radiusi r2 ni kiriting",
  "r1 katta bo'lishi kerak r2 ga qaraganda"
);
const P = 3.14;
let S1 = P * r1;
let S2 = P * r2;
let S = P * (r1 ** 2 - r2 ** 2);
console.log(S1);
console.log(S2);
console.log(S);

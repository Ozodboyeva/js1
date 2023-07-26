//begin 22
let M = 78;

let restSeconds = M % 3600;

let second = restSeconds % 60;

let minute = (M - second) / 60;

console.log(minute, ` daqiqa`);

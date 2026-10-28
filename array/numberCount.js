let num = 123;
let n = num;
let count = 0;
while (n > 0) {
  let lastdigi = num % 10;
   count++;
  n = Math.floor(n/10);
}
console.log(count);


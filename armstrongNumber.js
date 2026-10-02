let num = 153;
let temp = num;
let output = 0;
while (temp != 0) {
  let rem = temp % 10;
  temp = Math.floor(temp / 10);
  console.log(temp + " " + rem);
  output = output + rem * rem * rem;
}
if (output == num) {
  console.log("number is armstrong");
} else {
  console.log("not armstrong number");
}

console.log(output);

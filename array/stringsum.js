//"123"
//"921"

let s1 = "9";
let s2 = "921";
let carry = 0;
let output = "";
let i = s1.length - 1;
let j = s2.length - 1;
while (i >= 0 || j >= 0) {
  let sum =
    (i >= 0 ? Number(s1.charAt(i)) : 0) +
    (j >= 0 ? Number(s2.charAt(j)) : 0) +
    carry;
  i--;
  j--;
  if (sum > 9) {
    carry = 1;
    sum = sum % 10;
  } else {
    carry = 0;
  }
  output = sum + output;
}
if (carry == 1) {
  output = 1 + output;
}
console.log(output);

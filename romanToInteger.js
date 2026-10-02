let symbol = {
     "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
 let value = "LVIII";
 let sum = 0;

 for(let i=0; i<value.length;i++){
   
    let current =(symbol[value[i]]);
    sum = current + sum;

 }
 console.log(sum);
 
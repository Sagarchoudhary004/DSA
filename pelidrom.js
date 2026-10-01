let num = 123;
let temp = num;
let pali = 0;
 while(temp != 0){
    /*
        121
           rem = 121%10 = 1
           temp = 121/10 = 12
           pali = pali*10 + rem; 0*10+1 = 1

        12

           rem = 12%10 = 2
           temp = 12/10 = 1
           pali = pali*10 + rem; 1*10+2 = 12

        1
           rem = 1%10 = 1
           temp = 1/10 = 0
           pali = 12*10 + rem; 12*10+1 = 121

           
    */
   let rem = temp%10; 
   
   
   pali = pali*10 + rem;
   temp = Math.floor(temp/10);

   console.log(rem+" "+ pali+ " " + temp);
 }

 if(pali == num)
    console.log("palidrome")
else
    console.log("non palidrome")

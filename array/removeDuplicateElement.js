let  nums = [1,1,1,2,3,3,4]

let x = 0;

for(let i=1;i<nums.length;i++){
    if(nums[x]!=nums[i]){
        x = x+1;
        nums[x]=nums[i]
    }  
    
}

console.log(nums.slice(0, x + 1));

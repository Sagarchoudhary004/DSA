/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    for(let i=0;i < s.length; i++){

        if('('==s[i] ||'['==s[i] ||'{'==s[i] ){
            arr.push(s[i]) // (
        }
        else{
            let lst = arr.pop();// (

            console.log(s[i]+ " "+ lst)
            if(s[i]==')' && lst!='(') //
            return false;
             if(s[i]=='}' && lst!='{')
            return false;
             if(s[i]==']' && lst!='[')
            return false;
        }
    }
    return arr.length === 0;
}; 

console.log(isValid("{()]"));
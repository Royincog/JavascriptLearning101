//function statement
function addTheNumbertoHundred(){
    let sum = 0;
    for(let i = 0;i < 100;i++){
        sum += i;
        console.log(sum);
    }
}
//function expression
var addNumbertoHundredFunctionExpression = function(){
    let sum = 0;
    for(let i = 0;i <= 100;i++){
        sum += i;
        
    }
    return sum;
}
let sum = addNumbertoHundredFunctionExpression();
console.log(sum);
let array = [1990,1965,1965,1969,2005]
let reversedArray = [];

function someaction(array,somac){

    for(let i = 0; i <  array.length; i++){
        reversedArray.push(somac(array[i]));
    }

}

function someac(element){

let reverse = 0;
while(element > 0){
    let lasDigit = element % 10;
    reverse = (reverse * 10) + lasDigit;
    element = element / 10 | 0;  //This we don't do in Java :(
}
return reverse;
}
someaction(array,someac);
console.log(reversedArray);
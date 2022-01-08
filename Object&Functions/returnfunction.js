function guesstheNumber(input){
    let number = Math.round(Math.random() * 10);

    if(input > number){
        return function(element){
            if(input - number <= 10){
                console.log(element + ' very close');
            }
            else{
                console.log(element + ' is far');
            }
        }
    }
    else if(input < number){
        return function(element){
            if(number - input <= 10){
                console.log(element + ' very close');
            }
            else{
                console.log(element + ' is far');
            }
        }
    }
    else{
        console.log('Yayy !! Correct');
    }


}
console.log('huhu')
let genericfunc = guesstheNumber(4)(4);
//genericfunc(3);
//Random guessingggg
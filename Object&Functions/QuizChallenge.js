let Question = function(question,options,correctAnswer) {
this.question = question;
this.options = options;
this.correctAnswer = correctAnswer;
}
let quizArray;

//For the question to be push to quiz Array
(function(){

    // let questionOne = Object.create(Question,{
    //     question: {value: 'What is your favourite fast food?'},
    //     options: {value: ['Pizza','Burger']}
    // });

    let questionOne = new Question('What is your favourite fast food?',['Pizza','Burger'],'Pizza');
    let questionTwo = new Question('What is your favourite coding language ?',['Java','JavaScript'],'Java');
    let questionThree = new Question('What is your favourite bevearage?',['Tea','Coffee'],'Coffee');

    quizArray = new Array(questionOne,questionTwo,questionThree);

})();


// let answer = prompt('Please select the anser');

//For the logic and storing points
(function(){

    let answer;
    let correctAnswerScore = 0;
    do{
    showUIofQuestion();    
    answer = prompt('Please select the answer');   
     
    quizArray.forEach(function(item){
            if(item.correctAnswer == answer){
                console.log('Correct');
                correctAnswerScore ++;
            }
    })
    }while(answer != 'exit');
    
return function(){
    console.log('Score of the game ' + correctAnswerScore);
}

})()();

function showUIofQuestion() {
    (function () {

        let randomIntegerQuestion = getRandomInt(quizArray.length);
        let couterAnswer = 1;
        console.log("Q: " + quizArray[randomIntegerQuestion]['question']);
        for (let i = 0; i < quizArray[randomIntegerQuestion]['options'].length; i++) {
            console.log(couterAnswer + ". " + quizArray[randomIntegerQuestion]['options'][i]);
            couterAnswer++;
        }
    })();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
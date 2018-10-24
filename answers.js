// prompt('here is question')

var Question = function (questionItself, correctAnswer){
    this.questionItself = questionItself;
    this.answers = new Array();
    this.correctAnswer = correctAnswer;
}

    Question.prototype.addAnswers = function(answer) {
        this.answers.push(answer)
    }

   var question1 = new Question ('What\'s your name?', 2);
   question1.addAnswers('Viktorija')
   question1.addAnswers('Monika')
   question1.addAnswers('Angela');


   console.log(question1) 

   var question2 = new Question ('What is your favourite programe language?', 0);
   question2.addAnswers('JavaScript')
   question2.addAnswers('PHP')
   question2.addAnswers('Java')


   console.log(question2)

   var question3 = new Question('What\'s your favourite food?', 2)
   question3.addAnswers('Pizza')
   question3.addAnswers('Chickenburger')
   question3.addAnswers('Fish');

   console.log(question3)
   var question4= new Question('What\'s your favourite food?', 2)
   question4.addAnswers('Pizza')
   question4.addAnswers('Chickenburger')
   question4.addAnswers('Fish');



    var questionArray = [];
    questionArray.push(question1,question2,question3)

    console.log(questionArray)

    var randomQuestion = Math.floor(Math.random() * questionArray.length);
    var choise = questionArray[randomQuestion];

    console.log(choise.questionItself)
    

    for(var i=0; i<choise.answers.length; i++) {
        var objAnswers = {
            number:i + ':',
            answer:choise.answers[i]
        }
        console.log(objAnswers.number,objAnswers.answer);  
    }

        var counterCorrectAnswer = 0;
        function getAnswer() {
            var res = prompt(choise.questionItself);
            var resNumber = parseInt(res);
            if(resNumber === choise.correctAnswer){
                console.log('Correct answer :)')
                counterCorrectAnswer++;
                console.log('Your counter score is: ' + counterCorrectAnswer)
            } else {
                console.log('Wrong answer. Try Again!')
                console.log('Your counter score is: ' + counterCorrectAnswer)
            }

        }
            getAnswer();
   
        
    


    // for(var i=0; i<arrayAnswers.length; i++){
    //     console.log(arrayAnswers[i].number, arrayAnswers[i].answer)
    // }


    



//    var answers = ['Angela','Viktorija', 'Monika'];
//    var Question = function (questionItself, answers, correctAnswer){
//     this.questionItself = questionItself;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }


// var question2 = new Question ('What is your favourite programe language?', answers, 0);
// console.log(question2)



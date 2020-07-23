//Question title
const titleText = document.getElementById('question-title');
//Answer Option buttons and boolean conditions
const answerOption1 = document.getElementById('option1');
let answerOption1Clicked = false;
const answerOption2 = document.getElementById('option2');
let answerOption2Clicked = false;
const answerOption3 = document.getElementById('option3');
let answerOption3Clicked = false;
const answerOption4 = document.getElementById('option4');
let answerOption4Clicked = false;

//Creating an array of all answer option buttons
let allanswerOptions = [answerOption1, answerOption2, answerOption3, answerOption4];
let scoreTotal = document.getElementById('score-total');
let score = 0;

//Empty array where askedQuestions will be pushed
let askedQuestionsIndex = [];
let timer = document.getElementById('timer');

//Time that user has to answer question
let timeToAnswer = 6;

//Geting the quiz category buttons
let historyCategoryButton = document.getElementById('historyCategory');
let sportCategoryButton = document.getElementById('sportCategory');
let generalKnowledgeCategoryButton = document.getElementById('generalKnowledgeCategory');
let musicCategoryButton = document.getElementById('musicCategory');
let tvCategoryButton = document.getElementById('tvCategory');

//An array of quiz category buttons
let allCategories = [historyCategoryButton, sportCategoryButton, generalKnowledgeCategoryButton, musicCategoryButton, tvCategoryButton];
let chosenCategory = '';
let categoriesTitle = document.getElementById('categories-title');
let questionIndex = document.getElementById('question-index');

//Setting index position of questions to 0 at start of quiz
let questionNumberIndexPosition = 0;
let result = document.getElementById('result');

//Optaining 'Play Again' button (on modal)
let resetButton = document.getElementById('reset-button');

//Interval variable for timer
let interval;

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal and reset the quiz
span.onclick = function () {
    modal.style.display = "none";
    resetQuiz();
}


//Defining variable which will store the correct index position for each question
let correctAnswerIndex;

//Array which is used to store the category of questions chosen by the user
let chosenQuestions = [];

//Using a for each loop to hide all answer option buttons at the start of the programme
allanswerOptions.forEach((button) => {
    button.style.display = 'none';
    button.classList.add('answer-option-button');
})


//Using a for loop to add a style and event listener to each quiz category button. This is used to then start the quiz.
allCategories.forEach((category) => {
    category.classList.add('button-style');
    category.addEventListener('click', (e) => {
        chosenCategory = e.target.textContent;
        startQuiz(chosenCategory);
    })
})


/*
This function is used to reset the timer for each question, decrementing by 1 each second.
If the user clicks an answer option / timer equals 0, it is reset to 6.
*/
function setTimer() {


    timeToAnswer--;


    timer.textContent = timeToAnswer;

    if (timeToAnswer === 0) {
        questionNumberIndexPosition++;
        generateQuestion();
        timeToAnswer = 6;

    } else if (answerOption1Clicked) {
        timeToAnswer = 6;
        answerOption1Clicked = false;
    } else if (answerOption2Clicked) {
        timeToAnswer = 6;
        answerOption2Clicked = false;
    } else if (answerOption3Clicked) {
        timeToAnswer = 6;
        answerOption3Clicked = false;
    } else if (answerOption4Clicked) {
        timeToAnswer = 6;
        answerOption4Clicked = false;
    }


    return timeToAnswer;
}


/*
This function is used to start the quiz. It takes a category parameter which is used 
to obtain the correct questions (based on which category the user has chosen) and then push these
questions to chosenQuestions array.
It also starts the timer and displays the answerOption buttons.
It hides the category buttons and then calls generateQuestion() function.
*/
function startQuiz(category) {
    interval = setInterval(setTimer, 1000);
    scoreTotal.style.display = "block";
    titleText.style.display = "block";
    questionIndex.style.display = "block";
    timer.style.display = "block";


    questions.forEach(question => {
        if (question.category === category) {
            chosenQuestions.push(question);

        }

    });



    allanswerOptions.forEach((button) => {
        button.style.display = 'inline-block';
    })
    scoreTotal.textContent = `${score} / ${askedQuestionsIndex.length}`;
    allCategories.forEach((category) => {
        category.style.display = "none";
    })
    categoriesTitle.style.display = "none";
    generateQuestion();
}


if (questionNumberIndexPosition === 9) {
    clearInterval(interval);
}



/*
The generateQuestion function is used to determine if all questions have been asked.
If so, the modal is displayed to the user and the endQuiz() method is called.
This function dynamically populates the question title and answer option elements, using the 
questionNumberIndexPosition index in the chosenQuestions array.
*/
function generateQuestion() {


    scoreTotal.textContent = `${score} / ${askedQuestionsIndex.length}`;




    if (questionNumberIndexPosition === (chosenQuestions.length)) {
        modal.style.display = "block";
        return endQuiz();
    }

    questionIndex.textContent = `Question ${questionNumberIndexPosition + 1}`


    titleText.textContent = chosenQuestions[questionNumberIndexPosition].title;

    correctAnswerIndex = chosenQuestions[questionNumberIndexPosition].options.indexOf(chosenQuestions[questionNumberIndexPosition].correctAnswer);

    for (let i = 0; i < allanswerOptions.length; i++) {
        allanswerOptions[i].textContent = chosenQuestions[questionNumberIndexPosition].options[i];

    }
    chosenQuestions[questionNumberIndexPosition].asked = true;



    askedQuestionsIndex.push(questionNumberIndexPosition);

    for (let i = 0; i <= 3; i++) {
        allanswerOptions[i].classList.remove('answer-failure', 'answer-success');
    }

}


/*
The endQuiz() method is used to tally the user's score and adds an event listener to the 'Play Again' button
on the modal.
The timer is also stopped (using the clearInterval method).

*/
function endQuiz() {
    let scorePercentage = (score / askedQuestionsIndex.length) * 100;
    resetButton.addEventListener('click', resetQuiz);

    result.textContent = `You answered ${score} questions correctly, giving you a result of ${scorePercentage}%.`
    clearInterval(interval);
}

/*
The resetQuiz() method is used to display the category buttons on screen again, clear all scores and arrays
and hide answeroption buttons and question information.
This method includes the event listener to check the next category that the user chooses, pushes the relevant
questions to the chosenQuestions array and hides the modal.
*/

function resetQuiz() {
    categoriesTitle.style.display = "block";
    chosenCategory = "";
    allCategories.forEach((category) => {
        category.style.display = "inline-block";
    })

    score = 0;
    chosenQuestions = [];
    askedQuestionsIndex.length = 0;
    scoreTotal.style.display = "none";
    titleText.style.display = "none";
    questionIndex.style.display = "none";
    timer.style.display = "none";




    allanswerOptions.forEach((button) => {
        button.style.display = 'none';
    })
    allCategories.forEach((category) => {
        category.addEventListener('click', (e) => {
            chosenCategory = e.target.textContent;
            console.log(e.target.textContent);

        })
    });

    questions.forEach(question => {
        if (question.category === chosenCategory) {
            chosenQuestions.push(question);

        }

    });
    modal.style.display = "none";
    questionNumberIndexPosition = 0;

}


/*
Event listener for answer option 1 which checks if the text content in this button is the correct answer.
Adds classes for error and success to button (green if correct, red if incorrect).
Increments the questionNumberIndexPosition.
Also calls generateQuestion() function to get the next question with a delay of 1500 milliseconds to 
allow the user to see if they were correct or not.
*/
answerOption1.addEventListener('click', (e) => {
    if (e.target.textContent === chosenQuestions[questionNumberIndexPosition].correctAnswer) {

        answerOption1.classList.add('answer-success');
        for (let i = 1; i <= 3; i++) {
            allanswerOptions[i].classList.add('answer-failure');
        }
        score++;
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption1Clicked = true;

    } else {
        for (let i = 0; i <= 3; i++) {
            if (i === correctAnswerIndex) {
                allanswerOptions[correctAnswerIndex].classList.add('answer-success');

            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }


        }
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption1Clicked = true;

    }

})

/*
Event listener for answer option 2 which checks if the text content in this button is the correct answer.
Adds classes for error and success to button (green if correct, red if incorrect).
Increments the questionNumberIndexPosition.
Also calls generateQuestion() function to get the next question with a delay of 1500 milliseconds to 
allow the user to see if they were correct or not.
*/
answerOption2.addEventListener('click', (e) => {
    if (e.target.textContent === chosenQuestions[questionNumberIndexPosition].correctAnswer) {

        answerOption2.classList.add('answer-success');
        for (let i = 0; i <= 3; i++) {
            if (i === 1) {
                continue;
            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }


        }

        score++;
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption2Clicked = true;

    } else {
        for (let i = 0; i <= 3; i++) {
            if (i === correctAnswerIndex) {
                allanswerOptions[correctAnswerIndex].classList.add('answer-success');

            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }

        }
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption2Clicked = true;
    }

})

/*
Event listener for answer option 3 which checks if the text content in this button is the correct answer.
Adds classes for error and success to button (green if correct, red if incorrect).
Increments the questionNumberIndexPosition.
Also calls generateQuestion() function to get the next question with a delay of 1500 milliseconds to 
allow the user to see if they were correct or not.
*/
answerOption3.addEventListener('click', (e) => {
    if (e.target.textContent === chosenQuestions[questionNumberIndexPosition].correctAnswer) {

        answerOption3.classList.add('answer-success');
        for (let i = 0; i <= 3; i++) {
            if (i === 2) {
                continue;
            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }

        }
        score++;
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption3Clicked = true;

    } else {
        for (let i = 0; i <= 3; i++) {
            if (i === correctAnswerIndex) {
                allanswerOptions[correctAnswerIndex].classList.add('answer-success');

            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }

        }
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption3Clicked = true;
    }
})

/*
Event listener for answer option 4 which checks if the text content in this button is the correct answer.
Adds classes for error and success to button (green if correct, red if incorrect).
Increments the questionNumberIndexPosition.
Also calls generateQuestion() function to get the next question with a delay of 1500 milliseconds to 
allow the user to see if they were correct or not.
*/
answerOption4.addEventListener('click', (e) => {
    if (e.target.textContent === chosenQuestions[questionNumberIndexPosition].correctAnswer) {

        answerOption4.classList.add('answer-success');
        for (let i = 0; i <= 3; i++) {
            if (i === 3) {
                continue;
            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }

        }
        score++;
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption4Clicked = true;

    } else {
        for (let i = 0; i <= 3; i++) {
            if (i === correctAnswerIndex) {
                allanswerOptions[correctAnswerIndex].classList.add('answer-success');

            } else {
                allanswerOptions[i].classList.add('answer-failure');
            }

        }
        questionNumberIndexPosition++;
        setTimeout(generateQuestion, 1500);
        answerOption4Clicked = true;
    }
})
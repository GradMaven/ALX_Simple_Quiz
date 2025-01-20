


function checkAnswer() {

    const correctAnswer = '4';

    //Retrieve User's Answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    
    //Compare the User’s Answer with the Correct Answer
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedRadio.value;

    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }

}
//Add an Event Listener to the Submit Button

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
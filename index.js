const questions = document.getElementsByClassName('question');
const answers = document.querySelectorAll('p')
const closeButtons = document.getElementsByClassName('plusSignImg')


for (let i = 0; i < questions.length; i++) {
    
    const texToAlter = questions[i].querySelector('h2');

    questions[i].addEventListener('mouseenter', function () {
        highlightQuestion(texToAlter);
    });
    questions[i].addEventListener('mouseleave', function() {
        questionBackToNormal(texToAlter);

    });
    questions[i].addEventListener('click', function() {
        showAnswer(answers[i]);
        switchPlusSign(closeButtons[i]);
    });

    closeButtons[i].addEventListener('click', function() {
        hideAnswer(answers[i]);
        switchPlusSignBack(closeButtons[i]);
    });

}

function showAnswer (answer) {
    answer.style.display = 'block';

}

function highlightQuestion (question) {
    question.setAttribute('id', "mouseover");
}

function questionBackToNormal (question) {
    question.id = null;

}

function hideAnswer(answer) {
    answer.style.display = 'none';

}

function switchPlusSignBack(button) {
    button.setAttribute('src', 'assets/images/icon-plus.svg')
}

function switchPlusSign(button) {
    button.setAttribute('src', 'assets/images/icon-minus.svg' )
}

export {showAnswer, highlightQuestion, questionBackToNormal, hideAnswer, switchPlusSignBack,
        switchPlusSign}
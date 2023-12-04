const questions = document.getElementsByClassName('question');

const answers = document.querySelectorAll('p')


for (let i = 0; i < questions.length; i++) {
    
    const texToAlter = questions[i].querySelector('h2');

    questions[i].addEventListener('mouseenter', function () {
        highlightQuestion(texToAlter)
    })
    questions[i].addEventListener('mouseleave', function() {
        questionBackToNormal(texToAlter)

    })
    questions[i].addEventListener('click', function(e) {
        showAnswer(answers[i])
    })

}

function showAnswer (answer) {
    answer.style.display = 'block';

}

function highlightQuestion (question) {
    question.classList.add("mouseover");
}

function questionBackToNormal (question) {
    question.classList.remove("mouseover");

}
import {showAnswer, highlightQuestion, questionBackToNormal, hideAnswer, 
    switchPlusSignBack, switchPlusSign}  from './index.js';

const questions = document.getElementsByClassName('question');
const answers = document.querySelectorAll('p')
const closeButtons = document.getElementsByClassName('plusSignImg')

document.addEventListener('keydown', function (e) {
    if (e.keyCode > 36 && e.keyCode < 41) {
        navigateWithArrows(e);
    }
})

function navigateWithArrows (keyPressed) {
    let h2Elements = [];
    for (let i = 0; i < questions.length; i++) {
        h2Elements.push(questions[i].querySelector('h2'));
    }
    
    const selectedQuestion = h2Elements.filter(hasMouseOver);
    
    if (selectedQuestion.length === 0) {
        highlightQuestion(h2Elements[0])
    } else if  (selectedQuestion.length !== 0) {
        const selected = document.getElementsByClassName('mouseover')
        console.log(selected)
        console.log(selected.nextElementSibling)
        

    }
        
    }
    



function hasMouseOver (value, index, array) {
    return value.classList.contains('mouseover')
}
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
        const selected = document.getElementById('mouseover')
        for (let i = 0; i < h2Elements.length; i++) {
            if (selected === h2Elements[i]) {
                questionBackToNormal(h2Elements[i])
                highlightQuestion(h2Elements[i+1])
                break
            }
        }
        }
        
        
        
        

    }
    



function hasMouseOver (value, index, array) {
    return value.id === 'mouseover';
}
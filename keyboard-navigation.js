import {showAnswer, highlightQuestion, questionBackToNormal, hideAnswer, 
    switchPlusSignBack, switchPlusSign}  from './index.js';

const questions = document.getElementsByClassName('question');
const answers = document.querySelectorAll('p')
const closeButtons = document.getElementsByClassName('plusSignImg')

let ans = -1;

document.addEventListener('keydown', function (e) {
    if (e.keyCode > 36 && e.keyCode < 41) {
        activateKeyNav(e);
    }
})

function activateKeyNav (keyPressed) {
    let h2Elements = [];
    for (let i = 0; i < questions.length; i++) {
        h2Elements.push(questions[i].querySelector('h2'));
    }
    
    const selectedQuestion = h2Elements.filter(hasMouseOver);
    
    if (selectedQuestion.length === 0) {
        highlightQuestion(h2Elements[0])
        
    } else if  (selectedQuestion.length !== 0) {
        const selected = document.getElementById('mouseover')
            if (keyPressed.keyCode === 38) {
                navigateup(selected, h2Elements);
            }
            else if (keyPressed.keyCode === 40) {
                navigatedown(selected, h2Elements)
            }
        
        }
    }


function hasMouseOver (value, index, array) {
    return value.id === 'mouseover';
}

function navigatedown(selected, h2Elements) {
    for (let i = 0; i < h2Elements.length; i++) {
        if (selected === h2Elements[i] && h2Elements[i+1] !== undefined) {
            questionBackToNormal(h2Elements[i])
            highlightQuestion(h2Elements[i+1])
            
            break
        } else if (h2Elements[i+1] === undefined) {
            
        }
    }
    
}

function navigateup(selected, h2Elements) {
    for (let i = 0; i < h2Elements.length; i++) {
        if (selected === h2Elements[i] && h2Elements[i-1] !== undefined) {
            questionBackToNormal(h2Elements[i])
            highlightQuestion(h2Elements[i-1])
            
            break;
        } else if (h2Elements[i+1] === undefined) {
            
        } 
    }

}

// opening  questions with enter

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 40 && ans < 3) {
        ans = ans + 1;
    } else if (e.keyCode === 38 && ans > 0) {
        ans = ans - 1;
    } else {

    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        const style = window.getComputedStyle(answers[ans]);
        if (style.display === 'none') {
            showAnswer(answers[ans])
            switchPlusSign(closeButtons[ans])

        } else if (style.display === 'block') {
            hideAnswer(answers[ans])
            switchPlusSignBack(closeButtons[ans])
        }
                
                    
    }
})

// these two last functions could've done the whole thing...


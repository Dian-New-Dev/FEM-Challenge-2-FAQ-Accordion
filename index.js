const questions = document.getElementsByClassName('question');
console.log(questions);

for (let x of questions) {
    const texToAlter = x.querySelector('h2');
    x.addEventListener('mouseenter', function () {
        texToAlter.classList.toggle("mouseover");
    })
    x.addEventListener('mouseleave', function() {
        console.log(e)
        texToAlter.classList.toggle("mouseover");

    })

}

function showAnswer (answer) {

}

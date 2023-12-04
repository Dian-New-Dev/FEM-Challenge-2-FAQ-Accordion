const questions = document.getElementsByClassName('question');
console.log(questions);

for (let x of questions) {
    const texToAlter = x.querySelector('h2');
    x.addEventListener('mouseenter', function (e) {
        texToAlter.classList.add("mouseover");
    })
    x.addEventListener('mouseleave', function(e) {
        console.log(e)
        texToAlter.classList.remove("mouseover");

    })

}

function showAnswer (answer) {

}

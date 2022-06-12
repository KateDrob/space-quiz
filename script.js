const button = document.querySelector (".btn");

button.addEventListener ("click", result);
const par = document.querySelector ("#show");

function result (e) {
    e.preventDefault ();

    let points = 0;
    if (document.querySelector ("#answerOne").checked) {
        points++;
    }

    if (document.querySelector ("#answerTwo").checked) {
        points++;
    }

    if (document.querySelector ("#answerThree").checked) {
        points++;
    }

    if (document.querySelector ("#answerFour").checked) {
        points++;
    }

    if (document.querySelector ("#answerFive").checked) {
        points++;
    }

    if (document.querySelector ("#answerSix").checked) {
        points++;
    }

    if (document.querySelector ("#answerSeven").checked) {
        points++;
    }

    par.textContent = "Правильные ответы - " + points + " из 7";

}


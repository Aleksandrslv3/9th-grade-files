const minus = document.querySelectorAll('.js-minus');
const plus = document.querySelectorAll('.js-plus')
const total = document.querySelectorAll('.js-total-result')

const minusSingleMove = document.querySelectorAll('.js-minus-single-move')
const answerSingleMove = document.querySelectorAll('.js-answer-single-move')
const plusSingleMove = document.querySelectorAll('.js-plus-single-move')

const refresh = document.querySelectorAll('.js-refresh')
const reset = document.querySelectorAll('.js-reset')

minus.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = parseInt(total[index].textContent) - 1
    }
})

plus.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = parseInt(total[index].textContent) + 1
    }
})

refresh.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = Number(total[index].innerHTML) + Number(answerSingleMove[index].innerHTML)

        answerSingleMove.innerHTML = '0';
    }
})

    reset.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = '0'
        answerSingleMove[index].innerHTML = '0'
    }
})

minusSingleMove.forEach((element, index) => {
    element.onclick = () => {
        answerSingleMove[index].innerHTML = parseInt(answerSingleMove[index].textContent) - 1
    }
})

plusSingleMove.forEach((element, index) => {
    element.onclick = () => {
        answerSingleMove[index].innerHTML = parseInt(answerSingleMove[index].textContent) +1
    }
})
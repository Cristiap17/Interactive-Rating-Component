const cardContainer = document.getElementById('cardContainer')
const numberSelected = document.getElementById('numberSelected')

const submitContent = document.getElementById('submit-content')
const submitButton = document.getElementById('submitButton')

const radioContainer = document.getElementsByClassName('ratio-content')[0].children


submitButton.addEventListener('click', toogleSubmitState)


for (let index = 0; index < radioContainer.length; index++) {
    radioContainer[index].addEventListener('click', ()=>{ backGraundChange(radioContainer[index].id)});
}

function toogleSubmitState() {
    submitContent.classList.toggle('inactive')
    cardContainer.classList.add('inactive')
}

function backGraundChange(id) {
    const ratioCheck = document.getElementById(id)
    console.log(ratioCheck.innerText);
        ratioCheck.style.backgroundColor = '#838c95'
        ratioCheck.style.color = 'white' 

        numberSecc(ratioCheck.innerText)
}

function numberSecc(numberSelec) {
    numberSelected.innerHTML = 'You selected out ' + numberSelec + ' of 5'
}
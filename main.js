const cardContainer = document.getElementById('cardContainer')
const numberSelected = document.getElementById('numberSelected')
const submitContent = document.getElementById('submit-content')
const submitButton = document.getElementById('submitButton')

const radioContainer = document.getElementById('hola').children
console.log(radioContainer);

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
    
    changeSelect(ratioCheck.id)
    numberSecc(ratioCheck.innerText)
}


let prev;
let current;

function changeSelect(ratioSelect) {

    if (!current) {
        current = ratioSelect;
    } else {
        prev = current;
        current = ratioSelect
    }

    const kbdCurrent = document.getElementById(current)
    kbdCurrent.style.backgroundColor = '#838c95'
    kbdCurrent.style.color = 'white'


    if (prev){
        const kbdPrev = document.getElementById(prev)
        kbdPrev.style.backgroundColor = '#272e38'
        kbdPrev.style.color = '#666e79'
    } 

    console.log(prev, current);

    //OTRA MANERA DE EJECUTAR EL CICLO PARA EL CAMBIO DE SELECCION

    /* for (let index = 0; index < radioContainer.length; index++) {
        if (radioContainer[index].id === ratioSelect){
            radioContainer[index].style.backgroundColor = '#838c95'
            radioContainer[index].style.color = 'white'
        } else {
            radioContainer[index].style.backgroundColor = '#272e38'
            radioContainer[index].style.color = '#666e79'
        }
        
    } */

}

function numberSecc(numberSelec) {
    numberSelected.innerHTML = 'You selected out ' + numberSelec + ' of 5'
}
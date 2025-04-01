let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let main = document.querySelector('main')
let header = document.querySelector('header')
let table = document.querySelector('table')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    main.classList.toggle('dark')
    header.classList.toggle('dark')
    table.classList.toggle('dark')
})

function changeSize() {
    if (window.innerWidth >= 600) {
        itens.style.display = 'flex'
    }
    else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'flex'
    }
}
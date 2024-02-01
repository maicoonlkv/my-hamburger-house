
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.showAll')
const buttonDiscount = document.querySelector('.discount')
const ButtonSumAll = document.querySelector('.sumAll')
const ButtonFilterVegan = document.querySelector('.filterVegan')
let myLi = ''

function formatCurrency(value) {
    const newValue = value.toLocaleString('Pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}


function showAll(productsArray) {
    myLi = '' //reseta a variavel para nao duplicar
    productsArray.forEach(function (item) {
        myLi = myLi + `
            <li>
                <img src=${item.src}>
                <p>${item.name}</p>
                <p class="item-price">${formatCurrency(item.price)}</p>
            </li>
        `
    })
    console.log(myLi)
    list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //funcao anonima para nao carregar automatico

//------------------------------------------------------------------------

function discount() {

    const newDiscount = menuOptions.map((item) => ({
        ...item, //altera somente o item modificado

        // name: item.name,
        price: item.price - item.price * 0.10,
        // vegan: item.vegan,
        // scr: item.src
    }))

    console.log(newDiscount)

    showAll(newDiscount)
}

buttonDiscount.addEventListener('click', discount)

//------------------------------------------------------------------------

function sumAll() {

    const sumAllItens = menuOptions.reduce((acc, item) => {
        const result = item.price
        return acc + result
    }, 0)
    list.innerHTML =
        `
            <li>
                <p class="item-price"> O valor total é: ${formatCurrency(sumAllItens)}</p>
            </li>
        `
}


ButtonSumAll.addEventListener('click', sumAll)

//------------------------------------------------------------------------

function filterVeganItens() {
    const filterVegan = menuOptions.filter( itens => {
        if(itens.vegan === true) return true
        else return false
    })
    console.log(filterVegan)
    showAll(filterVegan)
}


ButtonFilterVegan.addEventListener('click', filterVeganItens)

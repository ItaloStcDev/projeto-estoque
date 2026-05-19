import { Prod } from "./prodClass.js";

// const div1 = document.querySelector("#div1");

const setNewProdBtn = document.querySelector('#setBtn');
setNewProdBtn.addEventListener('click', setNewProd);

const savedData = JSON.parse(localStorage.getItem('stock')) || [];

const stock = [];

export function localStorageSave() {
    localStorage.setItem('stock', JSON.stringify(stock));
}

function setNewProd() {
    const name = document.querySelector('#nameInput').value;
    const value = document.querySelector('#valueInput').value;
    const quantity = document.querySelector('#quantityInput').value;

    if (!name || !value || !quantity) {
        window.alert('preencha todos os campos');
        return
    }

    const newProd = new Prod(name, Number(value), Number(quantity));

    stock.push(newProd);
    newProd.setIt(document.body, localStorageSave, deleteFromStock);
}

export const deleteFromStock = (obj, objdiv) => {
    stock.splice(stock.indexOf(obj), 1);
    objdiv.remove();
    localStorageSave();
}

savedData.forEach(product => {
    const newProd = new Prod(product.name, Number(product.value), Number(product.quantity));

    stock.push(newProd);
    newProd.setIt(document.body, localStorageSave, deleteFromStock);
});
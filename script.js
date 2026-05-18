import { Prod } from "./prodClass.js";


const div1 = document.querySelector("#div1");

const setNewProdBtn = document.querySelector('#setBtn');
setNewProdBtn.addEventListener('click', setNewProd);

export const estoque = [];

function setNewProd() {
    const nome = document.querySelector('#nomeInput').value;
    const valor = document.querySelector('#valorInput').value;
    const quantidade = document.querySelector('#quantidadeInput').value;

    if (!nome || !valor || !quantidade) {
        window.alert('preencha todos os campos');
        return
    }

    const novoProd = new Prod(nome, Number(valor), Number(quantidade));

    estoque.push(novoProd);
    novoProd.setIt(document.body);
}
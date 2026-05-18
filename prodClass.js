import { estoque} from "./script.js";

export class Prod {
    constructor(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    setIt(container) {
        const prodDiv = document.createElement('div');
        prodDiv.className = 'produtos';
        // prodDiv.innerText = `Nome: ${this.nome} - Valor: R$${this.valor} - Quantidade: ${this.quantidade}`
        container.appendChild(prodDiv);

        const prodName = document.createElement('div');
        prodName.innerText = 'name: ' + this.nome;
        prodDiv.appendChild(prodName);

        const prodValue = document.createElement('div');
        prodValue.innerText = `valor: R$`;
        const valueSpam = document.createElement('div');
        valueSpam.innerText = this.valor;
        prodDiv.appendChild(prodValue);
        prodValue.appendChild(valueSpam);
        

        const valuePlus = document.createElement('button')
        valuePlus.innerText = '+';
        valuePlus.addEventListener('click', ()=>{
            this.valor++;
            return valueSpam.innerText = this.valor;}
        )
        const valueMinus = document.createElement('button');
        valueMinus.innerText = '-';
        valueMinus.addEventListener('click', ()=>{
            this.valor>=1?this.valor--:this.valor;
            return valueSpam.innerText = this.valor;
        })
        prodValue.appendChild(valueMinus);
        prodValue.appendChild(valuePlus);

        const prodQuant = document.createElement('div');
        prodQuant.innerText = `quantidade: `;
        const quantSpam = document.createElement('div');
        quantSpam.innerText = this.quantidade;
        prodDiv.appendChild(prodQuant);
        prodQuant.appendChild(quantSpam);

        const quantPlus = document.createElement('button')
        quantPlus.innerText = '+';
        quantPlus.addEventListener('click', ()=>{
            this.quantidade++;
            return quantSpam.innerText = this.quantidade;}
        )
        const quantMinus = document.createElement('button');
        quantMinus.innerText = '-';
        quantMinus.addEventListener('click', ()=>{
            this.quantidade>=1?this.quantidade--:this.quantidade;
            return quantSpam.innerText = this.quantidade;
        })
        prodQuant.appendChild(quantMinus);
        prodQuant.appendChild(quantPlus);

        // const editBtn = document.createElement('button');
        // editBtn.setAttribute('class', 'edit');
        // editBtn.innerText = 'edit';
        // prodDiv.appendChild(editBtn);

        // editBtn.addEventListener('click', ()=>{
        //     const valueEdit = document.createElement('input');
        //     valueEdit.setAttribute('type', 'number');
        //     const valueSend = document.createElement('button');
        //     valueSend.innerText = 'send';

        //     valueSend.addEventListener('click', () => {this.valor = Number(valueEdit.value.trim())>=0?Number(valueEdit.value.trim()):this.valor; valueSpam.innerText = this.valor; valueEdit.remove(); valueSend.remove()});

        //     const quantEdit = document.createElement('input');
        //     quantEdit.setAttribute('type', 'number');
        //     const quantSend = document.createElement('button'); quantSend.innerText = 'send';
            
        //     quantSend.addEventListener('click', () => {this.quantidade = Number(quantEdit.value.trim())>=0?Number(quantEdit.value.trim()):this.quantidade; quantSpam.innerText = this.quantidade; quantEdit.remove(); quantSend.remove()});

        //     prodValue.appendChild(valueEdit);
        //     prodValue.appendChild(valueSend);
        //     prodQuant.appendChild(quantEdit);
        //     prodQuant.appendChild(quantSend);
        // })

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class','delete');
        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click', ()=>{
            estoque.splice(estoque.indexOf(this), 1);
            prodDiv.remove();
        })
        prodDiv.appendChild(deleteBtn);
    }
}
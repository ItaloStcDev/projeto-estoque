import { deleteFromStock } from "./script.js";

export class Prod {
    constructor(name, value, quantity) {
        this.name = name;
        this.value = value;
        this.quantity = quantity;
    }
    setIt(container, updatefunc, deleteFunc) {
        this.prodDiv = document.createElement('div');
        this.prodDiv.className = 'produtos';
        // prodDiv.innerText = `Name: ${this.name} - value: R$${this.value} - quantity: ${this.quantity}`
        container.appendChild(this.prodDiv);

        const prodName = document.createElement('div');
        prodName.innerText = 'name: ' + this.name;
        this.prodDiv.appendChild(prodName);

        const prodValue = document.createElement('div');
        prodValue.innerText = `value: R$`;
        const valueSpam = document.createElement('div');
        valueSpam.innerText = this.value;
        this.prodDiv.appendChild(prodValue);
        prodValue.appendChild(valueSpam);
        

        const valuePlus = document.createElement('button')
        valuePlus.innerText = '+';
        valuePlus.addEventListener('click', ()=>{
            this.value++;
            valueSpam.innerText = this.value;
            updatefunc();
        })
        const valueMinus = document.createElement('button');
        valueMinus.innerText = '-';
        valueMinus.addEventListener('click', ()=>{
            this.value>=1?this.value--:this.value;
            valueSpam.innerText = this.value;
            updatefunc();
        })
        prodValue.appendChild(valueMinus);
        prodValue.appendChild(valuePlus);

        const prodQuant = document.createElement('div');
        prodQuant.innerText = `quantity: `;
        const quantSpam = document.createElement('div');
        quantSpam.innerText = this.quantity;
        this.prodDiv.appendChild(prodQuant);
        prodQuant.appendChild(quantSpam);

        const quantPlus = document.createElement('button')
        quantPlus.innerText = '+';
        quantPlus.addEventListener('click', ()=>{
            this.quantity++;
            quantSpam.innerText = this.quantity;
        updatefunc();
        })
        const quantMinus = document.createElement('button');
        quantMinus.innerText = '-';
        quantMinus.addEventListener('click', ()=>{
            this.quantity>=1?this.quantity--:this.quantity;
            quantSpam.innerText = this.quantity;
            updatefunc();
        })
        prodQuant.appendChild(quantMinus);
        prodQuant.appendChild(quantPlus);

        // const editBtn = document.createElement('button');
        // editBtn.setAttribute('class', 'edit');
        // editBtn.innerText = 'edit';
        // this.prodDiv.appendChild(editBtn);

        // editBtn.addEventListener('click', ()=>{
        //     const valueEdit = document.createElement('input');
        //     valueEdit.setAttribute('type', 'number');
        //     const valueSend = document.createElement('button');
        //     valueSend.innerText = 'send';

        //     valueSend.addEventListener('click', () => {this.value = Number(valueEdit.value.trim())>=0?Number(valueEdit.value.trim()):this.value; valueSpam.innerText = this.value; valueEdit.remove(); valueSend.remove()});

        //     const quantEdit = document.createElement('input');
        //     quantEdit.setAttribute('type', 'number');
        //     const quantSend = document.createElement('button'); quantSend.innerText = 'send';
            
        //     quantSend.addEventListener('click', () => {this.quantity = Number(quantEdit.value.trim())>=0?Number(quantEdit.value.trim()):this.quantity; quantSpam.innerText = this.quantity; quantEdit.remove(); quantSend.remove()});

        //     prodValue.appendChild(valueEdit);
        //     prodValue.appendChild(valueSend);
        //     prodQuant.appendChild(quantEdit);
        //     prodQuant.appendChild(quantSend);
        // })

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class','delete');
        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click', ()=>{
            deleteFunc(this, this.prodDiv)
        });
        this.prodDiv.appendChild(deleteBtn);
        updatefunc();
    }
}
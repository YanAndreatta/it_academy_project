import { validaCPF } from "./valida-cpf.js";

export class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".form");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.isValid();
    }

    isValid() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll(".validar")){
            const label = campo.previousElementSibling.innerText;
            
            if(!campo.value) {
                this.createError(campo, `${label} em branco`);
                valid = false;

            } else {
                if(campo.classList.contains('cpf')) {
                    if(!this.validaCPF(campo)) valid = false;
                }
            }

            if(campo.classList.contains('numbers')) {
                if(!this.validaNumbers(campo)) valid = false;
            }

        }   

    }

    validaCPF(campo) {
        const cpf = validaCPF(campo.value);

        if(!cpf) {
            this.createError(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}



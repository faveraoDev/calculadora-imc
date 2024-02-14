let botao = document.getElementById('botao');
let nome = document.getElementById('nome');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById('resultado');

let getText = (imc) => {
    if(imc >= 40) return 'Obesidade mórbida';
    if(imc >= 30) return 'Obesidade';
    if(imc >= 25) return 'Sobrepeso';
    if(imc >= 18.5) return 'Peso ideal';
    return 'Desnutrição';
};

let limparCampos = () => {
    nome.value = '';
    peso.value = '';
    altura.value = '';
}

let imcCalc = () => {
    if(!peso.value || !nome.value || !altura.value) return resultado.textContent = 'Preencha todos os campos';
    
    let valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)} - IMC: ${valorImc}`;

    limparCampos();
};

botao.addEventListener('click', imcCalc);
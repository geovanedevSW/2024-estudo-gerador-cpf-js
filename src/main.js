import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
    const gerar = new GeraCPF();
    const resultado = document.querySelector('.cpf-gerado');
    const botao = document.querySelector('button');
    
    botao.addEventListener('click', (e) => {
        e.preventDefault()
        resultado.innerHTML = gerar.geraNovoCpf(); 
    })
})();
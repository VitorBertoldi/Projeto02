const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(nomes)

    adicionaLinha();   
    atualizaTabela(); 
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`A contato ${inputTelefone} ja foi inserido`);
    }else {
        nomes.push(inputNome.value);
        telefones.push(parseFloat(telefone.value));
    
        let linha = '<tr>';
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${inputTelefone.value}</td>`;
        linha +=`</tr>`;
    
        linhas += linha

    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

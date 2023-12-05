const form = document.getElementById('form-deposito');
const inputA = document.getElementById('campo-a');
const inputB = document.getElementById('campo-b');


form.addEventListener('submit', function(e) {
    e.preventDefault();


    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);


    function comparaValores(valorA, valorB) {
        if (valorA >= valorB) {
            alert("O valor não é válido");
        } else {
            alert("O valor é válido");
        }
    }


    comparaValores(valorA, valorB);
});
// Função que realiza o cálculo das operações na tabela
function calculateTable() {
    // Seleciona o corpo da tabela (<tbody>)
    const table = document.querySelector('table tbody');
    // Seleciona todas as linhas (<tr>) dentro do <tbody>
    const rows = table.querySelectorAll('tr');

    // Itera sobre cada linha da tabela
    rows.forEach(row => {
        // Seleciona todas as células (<td>) dentro da linha
        const cells = row.querySelectorAll('td');
        // Extrai o valor do primeiro número da célula (primeira coluna)
        const num1 = parseFloat(cells[0].textContent);
        // Extrai o operador da célula (segunda coluna)
        const operator = cells[1].textContent;
        // Extrai o valor do segundo número da célula (terceira coluna)
        const num2 = parseFloat(cells[2].textContent);
        // Variável para armazenar o resultado do cálculo
        let result;

        // Usa uma estrutura switch para decidir qual operação realizar
        if (operator == '+') {
            result = num1 + num2; // Soma
        } else if (operator == '-') {
            result = num1 - num2; // Subtração
        } else if (operator == '*') {
            result = num1 * num2; // Multiplicação
        } else if (operator == '/') {
            result = num1 / num2; // Divisão
        } else {
            result = 'Invalid operation'; // Caso o operador não seja reconhecido
        }

        // Atualiza o conteúdo da última célula da linha com o resultado do cálculo
        cells[4].textContent = result;
    });
}

// Chama a função calculateTable para realizar os cálculos quando o script é carregado
calculateTable();

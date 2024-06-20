const jsonfile = require('jsonfile');

// Lê o conteúdo do arquivo JSON existente
const data = jsonfile.readFileSync('dados.json');

console.log(data);

var id = 1;
var nome = 'bicicleta'

// Adiciona os dados desejados ao objeto
data.nome = {'id': id, 'nome': 'Monarck'};

// Escreve o objeto de volta no arquivo JSON
jsonfile.writeFileSync('dados.json', data);
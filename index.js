// Utilizado para entrada de dados
const input = require('readline-sync'); // Importa a biblioteca readline-sync para permitir a entrada de dados no terminal

// Classe
class Heroi {
    ataque = ""; // Propriedade que armazena o tipo de ataque do herói

    // Construtor da classe que inicializa as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome; // Atribui o nome fornecido
        this.idade = idade; // Atribui a idade fornecida
        this.tipo = tipo; // Atribui o tipo fornecido
    }

    // Método que determina o ataque baseado no tipo do herói
    atacar() {
        // Verifica o tipo do herói e define o ataque correspondente
        if (this.tipo === "mago") {
            this.ataque = "magia"; // Define ataque como magia para magos
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada"; // Define ataque como espada para guerreiros
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais"; // Define ataque como artes marciais para monges
        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken"; // Define ataque como shuriken para ninjas
        } else {
            // Caso o tipo não seja válido, informa o tipo inválido e define ataque inválido
            this.tipo = `- ${this.tipo} - é um TIPO INVÁLIDO`;
            this.ataque = "ATAQUE INVÁLIDO"; 
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`); // Exibe o tipo de herói e o ataque realizado
    }
}

// Laço de repetição para criar heróis de forma infinita, até que o usuário digite 'n'
do {
    // Solicita informações do usuário para criar um novo herói
    let nome = input.question('Informe do heroi: '); // Pergunta o nome do herói
    let idade = input.questionInt('Informe a idade do heroi: '); // Pergunta a idade do herói e espera um número inteiro
    let tipo = input.question('Informe o tipo heroi [mago, guerreiro, monge ou ninja]: '); // Pergunta o tipo do herói

    // Cria uma nova instância da classe Heroi com os valores inseridos pelo usuário
    let heroi = new Heroi(nome, idade, tipo.toLowerCase()); // Converte o tipo para minúsculas
    heroi.atacar(); // Chama o método atacar para exibir o tipo de ataque

    // Pergunta ao usuário se deseja criar um novo herói
    let sair = input.question('Deseja criar um novo heroi? [s/n] '); // Pergunta se o usuário deseja continuar

    // Se o usuário responder 'n', o loop é interrompido
    if(sair.toLowerCase() === 'n')
        break; // Sai do loop se o usuário não quiser criar mais heróis

} while(true); // O loop continua indefinidamente até que o usuário escolha sair

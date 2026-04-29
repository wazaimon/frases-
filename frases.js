let frases = [
    "grandecissimo coagulo hugo é uma grandecissimo goagulo - Pedro Gonzalez 2026",
    "governo sem imposto é igual guerra sem armas - lula ",
    "montar pc em 2026 é a mesma coisa que compara um corsa - IAs",
    "peitos pequenos preenchem o coração de um homem, peitos medios preenchem a mão de um homem, peitos grandes prenchem a vida de um homem - alguém do reddit",
    "o tolo reclama do bolço furado, o sabio usa para cosar o saco - sabio chines velho ",
];

let cliques = 0; //contador das frases 

function gerarFrases(){
    //sorteia uma 
    let indice = Math.floor(Math.random()* frases.length);

    let fraseEscolida = frases[indice]; // pega a frase

    cliques= cliques+1; //aumenta o contador de 1 em 1 

    document.getElementById("frase").innerText =
    fraseEscolida;

    document.getElementById("contador").innerText = "frasegeradas:"+cliques; 
}

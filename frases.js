let frases = [
    "se o eco responde, é porque alguém falou primeiro - Rover",
    "o silêncio também grita, só que poucos têm coragem de escutar - Yangyang",
    "no meio do caos, até a calmaria parece suspeita - Chixia",
    "quem controla o vento não teme a tempestade - Jiyan",
    "lembranças quebradas ainda cortam mais que lâminas - Yinlin",
    "seguir em frente não é escolha, é consequência - Calcharo",
    "até a luz pode cegar se você olhar tempo demais - Baizhi",
    "o mundo não acabou, ele só mudou sem avisar - Mortefi",
    "força sem controle é só destruição com estilo - Danjin",
    "no fim, todo sobrevivente vira história... ou aviso - Encore"
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

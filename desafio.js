class formHeroi {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    atacar(){
        let ataque = '';
        switch(this.tipo) {
            case 'Mago':
                ataque = 'Magia';
                break;
            case 'Guerreiro':
                ataque = 'Espada';
                break;
            case 'Monge':
                ataque = 'Golpes Marciais';
                break;
            case 'Ninja':
                ataque = 'Shuriken';
                break;
            case 'Arqueiro':
                ataque = 'Flechadas';
                break;
            case 'Espadachim':
                ataque = 'Katana';
                break;
            default:
                console.log("Tipo de herói não reconhecido!");
                return;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
function rodarOsDados(){
    let oDado = [ 1 , 2 , 3 , 4 , 5 , 6]
    let nDado = Math.floor(Math.random() * oDado.length)
    return oDado[nDado]
} 
function picHero (numero){
    let tipoHeroi = ["Mago", "Guerreiro","Monge","Ninja","Arqueiro","Espadachim"]
    let tipHeroi = tipoHeroi[numero-1]
    return tipHeroi

}
function nameHero(numero){
    let nome = ["Alaric", "Orion","Valerian","Eldritch","Hadrian","Leopold"]
    let nHeroi = nome[numero-1]
    return nHeroi
}

console.log("Seja bem vindo bravo herói! O dado mágico será rodado, irá nos dizer qual será seu herói. Boa Sorte!")
let nuDado = rodarOsDados()
let pic = picHero(nuDado)
let nome = nameHero(nuDado)
console.log(`Você tirou um ${nuDado} seu herói será ${pic} com nome ${nome}`)
let oneHero = new formHeroi (nome,pic)
oneHero.atacar()
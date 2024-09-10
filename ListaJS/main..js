/* 1 - Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.*/
var nome = prompt("Digite seu nome:");
var idade = prompt("Digite sua idade:");

var mensagemConcatenacao = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagemConcatenacao);

var mensagemInterpolacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagemInterpolacao);

/* 2 - Imprima a idade de uma pessoa com base no ano atual e no ano de nascimento dela */
var anoNascimento = prompt("Digite seu ano de nascimento:");
console.log(`Você tem ${2024 - anoNascimento} ano(s).`)

/* 3 - Calcule a média simples de 3 números */
var num1 = 10;
var num2 = 0;
var num3 = 5;
var media = (num1 + num2 + num3) / 3;
console.log(`${media}`);

/* 4 - Calcule a média ponderada de 3 números */
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var peso1 = parseFloat(prompt("Digite o peso do primeiro número:"));

var num2 = parseFloat(prompt("Digite o segundo número:"));
var peso2 = parseFloat(prompt("Digite o peso do segundo número:"));

var num3 = parseFloat(prompt("Digite o terceiro número:"));
var peso3 = parseFloat(prompt("Digite o peso do terceiro número:"));

var mediaPonderada = ((num1 * peso1) + (num2 * peso2) + (num3 * peso3)) / (peso1 + peso2 + peso3);


console.log(`A média ponderada dos três números é: ${mediaPonderada}`);

/* 5 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total. */
var area = parseFloat(prompt("Digite o tamanho da área a ser pintada (em metros quadrados):"));

var coberturaPorLitro = 3; // metros quadrados por litro
var litrosPorLata = 18; // capacidade de cada lata em litros
var precoPorLata = 80; // preço de cada lata

var litrosNecessarios = area / coberturaPorLitro;

var latasNecessarias = Math.ceil(litrosNecessarios / litrosPorLata);

var precoTotal = latasNecessarias * precoPorLata;

console.log(`Você precisará de ${latasNecessarias} lata(s) de tinta.`);
console.log(`O custo total será de R$ ${precoTotal.toFixed(2)}.`);


/* 6 - Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */
var turno = prompt('Digite o turno que você estuda: m (matutino), (v) vespertino, n (noturno)');

if (turno = 'm' ) {

    console.log("Bom dia!");

} else if (turno = 'v') {

    console.log("Boa tarde!");

} else {
    console.log("Boa noite!");
}


/* 7 - Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade. */
var maioridade = prompt("Digite sua idade outra vez:");

if (maioridade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.")
}

/* 8 - Crie um sistema que verifica se um ano é bissexto (dica: Não é só verificar se é múltiplo de 4) */

/* 9 - Crie um loop que imprima os números de 1 a 100 */
for (let i = 1; i < 100; i++) {
    console.log(i) }

/* 10 - Crie um loop que imprima a soma de todos os números de 0 a 100. */
var soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i; }
console.log("A soma de todos os números de 0 a 100 é: " + soma);

/* 11 - Crie um  loop que imprima o fatorial de 100 */
function factorial(n) {
    let result = BigInt(1);

    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

console.log(factorial(100).toString());


/* 12 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */  
var usuario = prompt("Digite seu nome de usuário:");
var senha = prompt("Digite sua senha:");

if (senha == usuario) {
    console.log("Seu usuário ou senha está incorreto.");
} 

/* 13 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. */
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { 
        console.log(i);
    }
}

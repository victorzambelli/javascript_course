let name = prompt('Digite um nome');
let age = prompt('Digite a idade');

let name2 = prompt('Digite um segundo nome');
let age2 = prompt('Digite uma segunda idade');

if (age > age2) {
    alert(`Pessoa mais velha: ${name} / Idade: ${age}\nPessoa mais nova: ${name2} / Idade: ${age2}\nDiferença de idade: ${age - age2}`);

} else if (age < age2) {
    alert(`Pessoa mais velha: ${name2} / Idade: ${age2}\nPessoa mais nova: ${name} / Idade: ${age}\nDiferença de idade: ${age2 - age}`);
} else {
    alert(`${name} e ${name2} tem a mesma idade`);
}
// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".

const nomes = ["Sofia", "Lucas", "Isabella", "Matheus", "Alice"];

for (let index = 0; index < nomes.length; index++) {
  console.log(index + 1 + ":" + nomes[index]);
}

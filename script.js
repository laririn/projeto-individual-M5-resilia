const array = [];
process.stdout.write("Insira uma propriedade do CSS ou 'SAIR' para sair:");
process.stdin.on('data', (input) => {
  const propriedade = input.toString().trim();
  if ((propriedade === 'SAIR') || (propriedade === 'sair')) {
    process.exit();
  } else {
    array.push(propriedade);
    process.stdout.write("Insira uma propriedade do CSS ou 'SAIR' para sair:");
  }
});

process.on('exit', () => {
  array.sort();
  console.log("Organizando propriedades do CSS...");
  array.forEach(propriedade => console.log(propriedade));
});
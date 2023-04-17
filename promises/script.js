// NEW PROMISE()
// Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

// const promessa = new Promise((resolve, rejected) => {
//   let condicao = true;
//   if(condicao) {
//     resolve({
//       nome: 'Pablo',
//       idade: 26
//     });
//   } else {
//     rejected(Error('Erro na Promise'));
//   }
// });

// const retorno = promessa.then((r) => {
//   r.profissao = 'Dev';
//   return r;
// }).then((r) => {
//   console.log(r);
//   return 'Feito 2';
// }).catch((rejected) => {
//   console.log(rejected);
// }).finally(() => {
//   console.log('Acabou');
// })

// console.log(retorno);


// PROMISE.ALL()
// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario Logado');
  }, 1000)
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500)
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolve) => {
  console.log(resolve);
});
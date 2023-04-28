const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras.reduce((acc, curr) => {
    const precos = Number(curr.preco.replace('R$ ', ''));
    return acc + precos;
  }, 0);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situacao:
        <span style={dados.ativa ? { color: 'green' } : { color: 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativo'}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Voce esta gastando muito</p>}
    </div>
  );
};

export default App;

// const ativo = true;
// const nome = 'Pablo';
// const titulo = <h1>Titulo Teste</h1>;
// const carro = {
//   marca: 'Ford',
//   rodas: '4',
// };
// const estiloH1 = {
//   color: 'blue',
//   fontSize: '20px',
//   fontFamily: 'Helvetica',
// };
// return (
//   <>
//     {titulo}
//     <label className={ativo ? 'ativo' : 'inativo'} htmlFor="nome">
//       Nome
//     </label>
//     <input type="text" id="nome" value={nome} />
//     <p>{carro.marca}</p>
//     <p>{carro.rodas}</p>
//     <h1 style={estiloH1}>Testando Style</h1>
//     <h2 style={{ color: 'green' }}>Testando Style 2</h2>
//   </>
// );

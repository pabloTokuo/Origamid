import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

console.log(formFields);

const reduceForm = formFields.reduce((acc, curr) => {
  return { ...acc, [curr.id]: '' };
}, {});

console.log(reduceForm);

function App() {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, curr) => {
      return { ...acc, [curr.id]: '' };
    }, {}),
  );

  const [response, setResponse] = React.useState(null);

  function fetchData(e) {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    };

    try {
      fetch('https://ranekapi.origamid.dev/json/api/usuario', options).then(
        (response) => setResponse(response),
      );
    } catch (erro) {
      console.log(erro);
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={fetchData}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuario criado</p>}
    </form>
  );
}

export default App;

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// form é o objeto com os dados do formulário
// body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

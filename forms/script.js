const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');

// VALUES
// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

// function handleKeyUp(e) {
//   console.log(e.target.value);
//   texto.innerText = e.target.value;
// }

// contato.addEventListener('keyup', handleKeyUp);

// VALIDAÇÃO
// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')

// function handleKeyUp(e) {
//   const target = e.target;

//   if(!target.checkValidity()) {
//     target.classList.add('invalido');
//     contato.nome.setCustomValidity('Campo nome obrigatorio');
//     target.nextElementSibling.innerText = target.validationMessage;
//   }
//   console.log(target.checkValidity());
//   console.log(e.target.value);
//   texto.innerText = e.target.value;
// }

// contato.addEventListener('change', handleKeyUp);

// SELECT
// function handleChange(event) {
//   document.body.style.backgroundColor = event.target.value;
// }

// contato.addEventListener('change', handleChange);

// DIFERENTES INPUTS
// function handleKeyUp(e) {
//   console.log(e.target.value)
//   document.body.style.background = e.target.value;
// }

// contato.addEventListener('change', handleKeyUp);

const dados = {};

function handleChange(e) {
  dados[e.target.name] = e.target.value;
  console.log(dados);
}

contato.addEventListener('change', handleChange);
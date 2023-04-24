// ASYNC / AWAIT
// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

const container = document.querySelector('.container p');
const containerImg = document.querySelector('.container img');

async function puxarDados() {
  try {
    const responseDados = await fetch('https://api.chucknorris.io/jokes/random');
    const responseDados2 = await fetch('https://rickandmortyapi.com/api/character');

    const jsonDados = await (await responseDados).json();
    const jsonDados2 = await (await responseDados2).json();
  
    const characters = jsonDados2.results;
    const randomIndex = Math.floor(Math.random() * characters.length);
    console.log(randomIndex);
    const character = characters[randomIndex];

    container.innerHTML = jsonDados.value;
    containerImg.src = character.image;

  } catch(error) {
    console.log(error);
  }
}

puxarDados();



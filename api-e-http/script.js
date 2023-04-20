const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
};

const title = document.querySelector('.container');

fetch(url, options).then(r => r.json()).then(json => {
  title.innerText = json.title;
  console.log(json);
});
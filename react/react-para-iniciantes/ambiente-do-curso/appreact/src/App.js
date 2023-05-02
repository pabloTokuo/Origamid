import Footer from './Footer.js';
import Form from './Form/Form.js';
import Header from './Header.js';

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Teste />
      <Footer />
    </>
  );
};

export default App;

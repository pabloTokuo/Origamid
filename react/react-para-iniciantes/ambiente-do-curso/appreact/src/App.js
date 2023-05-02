import Header from './App/Header';
import Home from './App/Home';
import Produtos from './App/Produtos';

const App = () => {
  const { pathname } = window.location;
  return (
    <>
      <Header />
      {pathname.includes('home') && <Home />}
      {pathname.includes('produtos') && <Produtos />}
    </>
  );
};

export default App;

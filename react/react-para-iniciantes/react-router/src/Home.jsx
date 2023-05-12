import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Pagina Home" description="Descricao da Home" />
      <h1>Home</h1>
      <p>Esse 'e a home'</p>
      <Link to={'produto/notebook'}>Notebook</Link> |
      <Link to={'produto/smartphone'}>Smartphone</Link>
    </div>
  );
};

export default Home;

const App = () => {
  function handleScroll(e) {
    console.log(e);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(e) => alert(e.target.innerText)}>Clique</button>
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0);
  const [mode, setMode] = useState(false);
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);
  console.log(nome);
  const css = {
    header: {
      backgroundColor:"red"
    }
  }
  return (
    <>
      <div style={
          {
            width: '100vw', 
            height: '100vh',
            backgroundColor: mode ? '#000' : '#FFF',
            color: mode ? '#FFF' : '#000',
            transitionDuration: '200ms'
          }
        }>
        <button 
          style={css.header}
          onClick={() => {
            setNumero(numero + 1);
            setMode(!mode);
          }}
        >+1</button>
        <h2>O valor é {numero}</h2>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
        <button onClick={() => setNomes([nomes, nome])}>guardar</button>
        <h3>Nomes: {nomes.toString()}</h3>
      </div>
    </>
  );
}
 
export default App;
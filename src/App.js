import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
       nome="Rodrigo"
       idade="28"
       profissao="Programador"
       foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWusL5QH9Hq-R0WV53WB1DgXpsCf11-M1tQ&s"/>
    </div>
  );
}

export default App;

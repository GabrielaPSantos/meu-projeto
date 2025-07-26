import './App.css';
/*import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'; */
import Evento from './components/Evento';
import Form from './components/Form'

function App() {
   
  return(
     <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero= "1"/>
       <Evento numero= "2"/>
       <Form />
      </div>
  )



  /* const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>   ----------
      <Frase />
      <Frase />
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
       nome="Rodrigo" 
       idade="28"
       profissao="Programador"
       foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWusL5QH9Hq-R0WV53WB1DgXpsCf11-M1tQ&s"/>
       <List />
    </div>
  );
  */
}

export default App;

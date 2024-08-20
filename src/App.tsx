import './App.css';
import { Questao01A } from './components/Questao1/Questao01';
import { Questao02 } from './components/Questao2/Questao02';
import { Questao03 } from './components/Questao3/Questao03';
import { Questao04 } from './components/Questao4/Questao04';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gabriel Al-Samir Guimarães Sales - 536039</h2>
        <h3>Questão 01</h3>
        <Questao01A />
        <h3>Questão 02</h3>
        <Questao02 />
        <h3>Questão 03</h3>
        <Questao03/>
        <h3>Questão 04</h3>
        <Questao04/>
      </header>
    </div>
  );
}

export default App;

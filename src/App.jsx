import Batsman from './Batsman';
import Counter from './export';
import './App.css';

function App() {
  function handleClick() {
    alert('I am clicked.');
  }
  const clikedStyle={
    border:'2px solid black'
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter />
      <button style={clikedStyle} onClick={handleClick}>Click Me 1</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 2</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 3</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 4</button>
    </>
  );
}

export default App;

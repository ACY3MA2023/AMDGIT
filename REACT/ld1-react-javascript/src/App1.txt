import logo from './logo.svg';
import './App.css';

export function Button() {
  return <button>A simple component in react</button>
}
function App() {
  return (
        // not interested in a div
      <>
        <h1>Our first component in react!!</h1>
        <Button/>
      </>
  )
}

export default App;

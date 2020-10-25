import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> This is Samiyalization. </h1>
      </header>

      <section className="App-main" >
        <div className="App-cards"> card 1 </div>
        <div className="App-cards"> card 1 </div>
        <div className="App-cards"> card 1 </div>
        <div className="App-cards"> card 1 </div>
      </section>

      <footer className="App-footer" >
        <p> Copyright @ Samiyalization org. </p>
      </footer>

    </div>
  );
}

export default App;

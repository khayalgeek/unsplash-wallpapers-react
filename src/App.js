import './App.css';
import Posts from './container/Posts/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </header>
      <main>
        <Posts/>
      </main>
    </div>
  );
}

export default App;

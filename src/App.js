import "./App.css";
import Header from "./components/Header";
import DogAPI from "./components/DogAPI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="container">
          <DogAPI />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

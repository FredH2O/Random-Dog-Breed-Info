import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import Navbar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
//import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {/* Componente Menú */}
      <header>
        <Navbar />
      </header>

      <main>
        <ItemListContainer />
      </main>

      {/* para despues el footer  */}
    </div>
  );
}

export default App;

import { Navbar, Accueil, Contact, Footer, Blog } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Accueil />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

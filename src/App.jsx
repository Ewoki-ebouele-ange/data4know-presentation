import { Navbar, Accueil, Contact,Footer } from './components';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

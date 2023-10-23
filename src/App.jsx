import { Navbar, Accueil, Contact, Footer, Blog } from './components';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<Accueil />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

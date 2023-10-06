import { Navbar, Accueil } from './components';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Accueil />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

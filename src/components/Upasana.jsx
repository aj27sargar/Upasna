import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Prarthana from './components/Prarthana'; // 👈 We will create this page

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="topbar">
        <div className="title">Upasana</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Bookmarks</a>
        </nav>
      </header>

      <main className="content">
        <h1>|| उपासना ||</h1>

        <div className="cards">
          {/* When clicking, it will navigate */}
          <Card text="|| प्रार्थना ||" onClick={() => navigate('/prarthana')} />
          <Card text="|| नामस्मरण ||" />
          <Card text="|| अध्याय चौदावा ||" />
          <Card text="|| श्री सद्गुरु चरित्र ||" />
          <Card text="|| मंगलाचरण ||" />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prarthana" element={<Prarthana />} />
      </Routes>
    </Router>
  );
}

export default App;

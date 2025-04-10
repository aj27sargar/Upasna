import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PrarthanaDetails from './components/PrarthanaDetails'; // <--- NEW page
import Adhay14 from './components/Adhay14';
import Counter from './components/counter';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="topbar">
        <div className="title">Upasana</div>
        <nav>
          <a href="/">Home</a>
          <a href="#">Bookmarks</a>
        </nav>
      </header>

      <main className="content">
        <h1>|| उपासना ||</h1>

        <div className="cards">
          {/* 👇 Navigate to Prarthana Details Page */}
          <Card text="|| प्रार्थना ||" onClick={() => navigate('/prarthana')} />
          <Card text="|| नामस्मरण ||" onClick={()=> navigate('/Counter')}/>
          <Card text="|| अध्याय चौदावा ||" onClick={()=>navigate('/Adhay14')}/>
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
        <Route path="/prarthana" element={<PrarthanaDetails />} />
        <Route path="/Adhay14" element={<Adhay14 />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;

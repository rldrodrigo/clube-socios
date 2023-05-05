import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return (
    <div className="App">
      <header>
        <h1>Sistema Gerenciador de Sócios para Clubes</h1>
        {/* <nav>
          <Link to="/"> Home </Link>
          <Link to="/private"> Página Privada </Link>
          {auth.user && <button type="button" onClick={handleLogout}> Sair</button> }
        </nav> */}
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;

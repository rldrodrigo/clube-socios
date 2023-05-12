import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { PageNotFound } from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return (
    <div className="App">
      {/* <header>
        <h1>Sistema Gerenciador de Sócios para Clubes</h1>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/private"> Página Privada </Link>
          {auth.user && <button type="button" onClick={handleLogout}> Sair</button> }
        </nav>
      </header> */}
      {/* <hr /> */}
      <Routes>
        <Route path="/clube-socios" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        <Route path="/home" element={<Home />} />
        <Route path="/notFound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}

export default App;

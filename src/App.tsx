import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { PageNotFound } from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { Socios } from './pages/Socios';
import { Papeis } from './pages/Papeis';
import { Planos } from './pages/Planos';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/clube-socios" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
          <Route path="/home" element={<RequireAuth><Home><Socios /></Home></RequireAuth>} />
          <Route path="/home/socios" element={<RequireAuth><Home><Socios /></Home></RequireAuth>} />
          <Route path="/home/planos" element={<RequireAuth><Home><Planos /></Home></RequireAuth>} />
          <Route path="/home/papeis" element={<RequireAuth><Home><Papeis /></Home></RequireAuth>} />
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
    </QueryClientProvider>
  );
}

export default App;

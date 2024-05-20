import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Auth from './pages/Auth';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);
  useEffect(()=>{
    console.log(modal)
  },[])

  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        { modal.modal && <Modal />}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to="/auth" /> : <Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

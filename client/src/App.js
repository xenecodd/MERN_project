import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const { modal } = useSelector((state) => state.modal);
  useEffect(()=>{
    console.log(modal)
  },[])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        { modal.modal && <Modal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

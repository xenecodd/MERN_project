import React, { useEffect, useState } from 'react';
import './auth.css'
import { loginAction, registerAction } from './../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const login = useSelector(state => state.auth);
  localStorage.setItem('TEST',login)
  useEffect(()=>{
    setIsLogin(login);
    console.log(login)
  // eslint-disable-next-line
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş yaparken kullanıcı adı gerekli değil
    if (!isLogin && (formData.username === '' || formData.username === null)) {
      alert('Lütfen tüm alanlari doldurun');
      return;
    }
    if(isLogin){
      dispatch(loginAction(formData))
    }else{
      dispatch(registerAction(formData))
    }
    console.log('Form gönderildi:', formData);
  };

  return (
    <div className="container max-w-sm mx-auto p-5 rounded-lg shadow ">
      <h2 className='title mb-5' >{isLogin? 'Giriş Yap' : 'Kayıt Ol'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input type="text" id="username" name="username" placeholder='Username' value={formData.username} onChange={handleInputChange} required />
          </div>
        )}

        <div className="form-group">
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <input type="password" id="password" name="password" placeholder='Password' value={formData.password} onChange={handleInputChange} required />
        </div>

        <button className='bg-blue-200' type="submit">{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</button>
      </form>

      <p className='choice cursor-pointer'>
        {isLogin ? (<span className='m' onClick={() => setIsLogin(!isLogin)}>Hesabınız yok mu? </span>) : (<span onClick={() => setIsLogin(!isLogin)}>Zaten hesabınız var mı?</span>)}
      </p>

    </div>
  );
}

export default Auth;

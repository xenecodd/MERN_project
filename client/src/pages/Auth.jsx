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
  const login = useSelector(state => state.auth.login);
  
  useEffect(()=>{
    setIsLogin(login);
    console.log(login)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş yaparken kullanıcı adı gerekli değil
    if (!isLogin && (formData.username === '' || formData.username === null)) {
      alert('Lütfen tüm alanları doldurun');
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
    <div className="container">
      <h2>{isLogin? 'Giriş Yap' : 'Kayıt Ol'}</h2>
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

        <button type="submit">{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</button>
      </form>

      <p>
        {isLogin ? (<span onClick={() => setIsLogin(!isLogin)}>Hesabınız yok mu? </span>) : (<span onClick={() => setIsLogin(!isLogin)}>Zaten hesabınız var mı?</span>)}
      </p>

    </div>
  );
}

export default Auth;

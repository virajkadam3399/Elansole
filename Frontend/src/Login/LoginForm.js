import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(credential);
    try {
      const response = await axios.post('', credential);
      console.log('log in :', response.data);
      const authToken = response.data.token;
      localStorage.setItem('authToken', authToken);
     if(authToken){navigate('/TableComponent');}
      
    } catch (error) {
      console.error('Registration error:', error);
    }
  };


  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#FFC0CB' }}>
      <div className="card shadow" style={{ width: '400px', height: '400px', background: '#008080' }}>
        <div className="card-body">
          <h4 className="card-title text-center mx-auto mb-3 p-2 " style={{ backgroundColor: '#90EE90',  marginTop: '-2rem ',width:'200px'}}>SIGN IN</h4>
          <div className="d-flex justify-content-center mb-3">
            <img src="/Images/useIcon.png" style={{ width: '100px', height: '100px' }} />
          </div>
          <form>
            <div className="form-group mb-4">
            <input type="text" className="form-control" name="username" placeholder="Enter your username" value={credential.username} onChange={handleChange} style={{ backgroundColor: 'grey', color: 'white' }} required />
            </div>
            <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Enter your password" value={credential.password} onChange={handleChange} style={{ backgroundColor: 'grey', color: 'white' }} required />
            </div>
            <div className="mt-2 text-end fs-6" style={{ fontSize: '12px', color: '#11EEF1' }}>Forgot your password?</div>
            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-primary" style={{ backgroundColor: '#90EE90' }} onClick={handleLogin}>LOGIN</button>
            </div>
            <div className="mt-2 text-center">
              <a href="./RegistrationForm" style={{color:'white'}}>Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

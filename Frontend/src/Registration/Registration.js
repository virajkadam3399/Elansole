import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('', formData);
      navigate(`/login`);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };


  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'skyblue' }}>
      <div className="card shadow" style={{ width: '400px', height: '400px' }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Registration</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />

            <div className="d-grid gap-2 col-6 mx-auto mt-3">
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
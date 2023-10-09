import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Navigate, useLocation } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Registration from './Registration/Registration';
import Table from './Table/Table';

const TableRoute = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed:', location.pathname);
  }, [location]);

  const isAuthenticated = localStorage.getItem('authToken') !== null;
  return isAuthenticated ? <Table /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route index element={<LoginForm/>}/>
            <Route exact path='/login' element={<LoginForm/>}/>
            <Route exact path='/RegistrationForm' element={<Registration/>}/>
            <Route exact path='/Table' element={<TableRoute />}/>
          </Routes>
        </Router>


        {/* <Registration/> */}
        {/* <LoginForm/> */}
        {/* <Table/> */}
    </div>
  );
}

export default App;

import React from 'react';
import {Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';
import RegistrationForm from './RegistrationForm';
import './App.css'

const App = () => (
  <div>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* <Route path="/register" element={<RegistrationForm />}/> */}
      </Routes> 
      <RegistrationForm/>
  </div>
)

export default App
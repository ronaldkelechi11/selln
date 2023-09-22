import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './screens/Landing'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Cart from './screens/Cart'
import Marketplace from './screens/Marketplace'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/marketplace' element={<Marketplace />} />
    </Routes>
  </BrowserRouter>
)

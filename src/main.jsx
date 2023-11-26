import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './screens/Landing'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Cart from './screens/Cart'
import AccountInfo from './components/AccountSetup/AccountSetup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />

      <Route path='/signup'>
        <Route index element={<Signup />} />
        <Route path='accountsetup' element={<AccountInfo />} />
      </Route>

      <Route path='/login' element={<Login />} />

      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
)

import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './screens/Landing'
import Cart from './screens/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
)

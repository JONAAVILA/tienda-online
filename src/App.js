import Navbar from './components/navbar/Navbar';
import Landing from './views/landing/Landing';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import VerifyEmail from './views/verifyEmail/VerifyEmail.jsx'
import User from './views/create/User';
import Home from './views/home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/validate' element={<VerifyEmail/>}/>
        <Route path='/create' element={<User/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

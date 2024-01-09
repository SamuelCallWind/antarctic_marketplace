import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentication/Authentication';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Message from './pages/message/Message';
import Home from './pages/homePage/Home';

function App() {
  return (
    <div className=''>

        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home/>} />
            <Route path='/message' element={<Message/>} />
            <Route path='/*' element={<Authentication/>} />
          </Routes>
        </BrowserRouter>
      

    </div>
  );
}

export default App;

import  {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import { Footer } from './Components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useUserAuthentication } from './hooks/useUserAuthentication';

function App() {

  const {user} = useUserAuthentication();
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/Login" />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

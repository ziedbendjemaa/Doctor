
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Admin from './Components/Admin';
import AddProduct from './Components/AddProduct';
import Description from './Components/Description';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/description/:id" element={<Description/>}/>
        <Route path="/addCart" element={<ShoppingCart/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;

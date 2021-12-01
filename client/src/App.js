
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

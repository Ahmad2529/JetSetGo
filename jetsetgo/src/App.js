import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Overview from './pages/Overview/Overview';
import Hotels from './pages/Hotels/Hotels';
import Results from './pages/Results/Results';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Booking from './pages/Booking/Booking';
import Destination from './pages/Destination/Destination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/hotel" element={<Hotels/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

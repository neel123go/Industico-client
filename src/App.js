import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

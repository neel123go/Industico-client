import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/LoginRegister/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

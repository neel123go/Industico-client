import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import { Purchase } from "./Pages/Purchase/Purchase";
import RequireAuth from './Pages/LoginRegister/RequireAuth/RequireAuth';
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { MyProfile } from "./Pages/Dashboard/MyProfile";
import { Toaster } from 'react-hot-toast';
import { MyOrders } from "./Pages/Dashboard/MyOrders";
import { CheckOut } from './Pages/Dashboard/CheckOut';
import { AddReview } from "./Pages/Dashboard/AddReview";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="checkOut/:id" element={<CheckOut />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>

        </Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Footer />
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Pages/Homepage/Navbar";
import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";
import Purchase from "./Pages/Purchases/Purchase";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/purchase/:toolsId"
          element={<Purchase></Purchase>}
        ></Route>
        <Route path="/review" element={<AddReview></AddReview>}></Route>
        {/* ======Dashboard====== */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="/my-order" element={<MyOrder></MyOrder>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Pages/Homepage/Navbar";
import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";
import Purchase from "./Pages/Purchases/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview";
import AddaNewTool from "./Pages/Dashboard/AddaNewTool";
import ManageTool from "./Pages/Dashboard/ManageTool";
import AllUser from "./Pages/Dashboard/AllUser";
import MyOrder from "./Pages/Dashboard/MyOrder";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/purchase/:toolId" element={<Purchase></Purchase>}></Route>
        {/* ======Dashboard====== */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>

        <Route index element={<MyProfile></MyProfile>} />
        <Route path="updateProfile" element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path="manageOrder" element={<ManageOrder></ManageOrder>}></Route>
        <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
        <Route path="allUser" element={<AllUser></AllUser>}></Route>
        <Route path="manageTool" element={<ManageTool></ManageTool>}></Route>
          <Route path="addTool" element={<AddaNewTool></AddaNewTool>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

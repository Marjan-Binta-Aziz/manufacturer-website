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
// import MyOrder from "./Pages/Dashboard/MyOrder";
// import MyProfile from "./Pages/Dashboard/MyProfile";
// import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
// import ManageProducts from "./Pages/Dashboard/ManageProducts";
// import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";

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

          {/* <Route index element={<MyProfile></MyProfile>} />
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="manageOrder" element={<ManageAllOrders></ManageAllOrders>}></Route> */}
        <Route path="manageTool" element={<ManageTool></ManageTool>}></Route>
          <Route path="addTool" element={<AddaNewTool></AddaNewTool>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

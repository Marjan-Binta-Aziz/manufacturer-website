import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Pages/Homepage/Navbar";
import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";
import Purchase from "./Pages/Purchases/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import AddReview from "./Pages/Dashboard/AddReview";
// import MyOrder from "./Pages/Dashboard/MyOrder";
// import MyProfile from "./Pages/Dashboard/MyProfile";
// import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
// import ManageProducts from "./Pages/Dashboard/ManageProducts";
// import AddProduct from "./Pages/Dashboard/AddProducts";
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
        {/* <Route path="/review" element={<AddReview></AddReview>}></Route> */}
        {/* ======Dashboard====== */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          {/* <Route index element={<MyProfile></MyProfile>} />
          <Route path="my-order" element={<MyOrder></MyOrder>}></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manage-product" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="manage-order" element={<ManageAllOrders></ManageAllOrders>}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Navbar from './Pages/Homepage/Navbar';
import SignIn from './Pages/User/SignIn';
import SignUp from './Pages/User/SignUp';
import Purchase from './Pages/Purchases/Purchase';
import AddReview from './Pages/Dashboard/AddReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/purchase/:_id" element={<Purchase></Purchase>}></Route>
        <Route path="/review" element={<AddReview></AddReview>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;

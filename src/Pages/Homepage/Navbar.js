import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  // sign up ta k dynamic korar jonno
  const navigate = useNavigate();
  const [authUser, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
    navigate('/signIn')
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/tools">Tools</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {authUser && <Link to="/dashboard">DashBoard</Link>}
      </li>
      <li>
        {authUser ? <>
          <button className="ml-0" onClick={logout}>Sign Out</button>
          <label className="btn btn-ghost btn-circle avatar w-32 flex flex-nowrap ">
          <small className="font-semibold p-2 rounded-3xl"> {authUser.displayName}
          </small>
        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=33791" alt="ty"/>
        </div>
      </label>
        </>
        :         
        <Link to="/signIn">Sign In</Link>
        }
      </li>

    </>
  );
  return (
    <div >
      <div className="navbar bg-secondary rounded-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="font-bold normal-case text-2xl ml-40">Brush to Rush </Link>
        </div>
        <Link className="w-32 ml-56" to='/'>
          <img className="ml-7" src="https://i.ibb.co/ncrnV11/logo.png" alt="logo" /> </Link>
          
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal ml-auto p-0">{menuItems}</ul>
        </div>
        <div className="flex-none navbar-end lg:hidden">
        <label htmlFor="dashboard-sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

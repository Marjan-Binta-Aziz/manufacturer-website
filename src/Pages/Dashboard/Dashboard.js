import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  //   const [isAdmin, loading] = useAdmin(user);

  //   if (loading) {
  //     <Loading />;
  //   }

  // const {
  //   data: user,
  //   isLoading,
  //   error,
  // } = useQuery(["usersByEmail", user?.email], () =>
  //   fetch(
  //     `http://localhost:5000/usersByEmail?email=${user?.email}`
  //   ).then((res) => res.json())
  // );

  // if (error) {
  //   toast.error(error.message);
  // }
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-10 lg:mt-16">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm btn-primary drawer-button lg:hidden flex mb-5"
          >
            Open Sidebar
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-slate-100 rounded-2xl text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/addTool">Add a New Tool</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrder">My Order</Link>
            </li>

            <li>
              <Link to="/dashboard/manageOrder">Manage All Order</Link>
            </li>
            <li>
              <Link to="/dashboard/allUser">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/manageTool">Manage Tool</Link>
            </li>

            {/*   {isAdmin || (
              <>
                <li>
                  <Link to="/dashboard/my-order">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-review">Add Review</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/manage-all-order">Manage All Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/make-admin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-product">Manage Product</Link>
                </li>
              </> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

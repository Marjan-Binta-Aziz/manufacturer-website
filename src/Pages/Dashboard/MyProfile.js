import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const { isLoading, error, data, refetch } = useQuery(["updateUserInfo"], () =>
    fetch(
      `https://rocky-stream-44489.herokuapp.com/usersByEmail?email=${user?.email}`
    ).then((res) => res.json())
  );
  // console.log(data);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Sorry",
      text: `You Information is not Updated`,
    });
    refetch();
  }
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className=" text-center text-primary text-4xl mb-2 uppercase">
        My Profile
      </h2>
      <div className="card w-full max-w-lg bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <p>Name: {data.name}</p>
          <p>Email: {data.email} </p>
          <p>Role: {data.role || "user"} </p>
          <p>Address: {data.address || "none"} </p>
          <p>Location: {data.location || "none"} </p>
          <p>Mobile: {data.mobile || "none"} </p>
        </div>
        <Link to="/dashboard/updateProfile" className=" btn btn-primary">
          {" "}
          update your Information
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;

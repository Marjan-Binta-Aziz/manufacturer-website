import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ConfirmModal from "./ConfirmModal";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [makeAdminId, setDeleteId] = useState("");
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["user"], () =>
    fetch(`http://localhost:5000/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/signIn");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.statusText} Access!!! Please Login again`,
        });
      }
    })
  );

  const handleAdmin = (answer) => {
    if (answer) {
      // console.log(makeAdminId);
      fetch(`http://localhost:5000/usersById?id=${makeAdminId}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" flex justify-center">
      <div className=" lg:pl-5 w-full">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          make admin
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td className=" capitalize">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <label
                          htmlFor="confirmation-modal"
                          onClick={() => {
                            setModal(true);
                            setDeleteId(user._id);
                          }}
                          className="btn btn-success btn-xs text-white"
                        >
                          Make Admin
                        </label>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {modal && (
          <ConfirmModal setModal={setModal} handleDelete={handleAdmin} />
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;

import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ConfirmModal from "./ConfirmModal";

const ManageAllOrders = () => {
  const [authUser] = useAuthState(auth);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const {
    data: bookingItems,
    isLoading,
    refetch,
  } = useQuery(["manageallorder", authUser], () =>
    fetch(`http://localhost:5000/booking`, {
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
          title: "Done",
          text: `${res.statusText} Access!!! Please Login again`,
        });
      }
    })
  );
  const handleDelete = (answer) => {
    if (answer) {
      fetch(`http://localhost:5000/bookingById/${deleteId}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
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
      <div className=" w-full lg:pl-5">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Manage all order
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingItems &&
                bookingItems.map((item, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td className=" capitalize">{item.toolsName}</td>
                    <td>{item.quantity} pcs</td>
                    <td>{item.price} tk</td>
                    <td>
                      {item.paymentId ? (
                        <>
                          <p className=" text-success">Paid</p>{" "}
                          <small className=" block">{item.paymentId}</small>
                          <label
                            htmlFor="confirmation-modal"
                            onClick={() => {
                              setModal(true);
                              setDeleteId(item._id);
                            }}
                            className="btn btn-error btn-xs text-white"
                          >
                            Delete
                          </label>
                        </>
                      ) : (
                        <>
                          {/* <button
                          onClick={() => {
                            navigate(`/dashboard/payment/${item._id}`);
                          }}
                          className="btn btn-success btn-xs text-white mr-5"
                        >
                          Pay
                        </button> */}
                          <label
                            htmlFor="confirmation-modal"
                            onClick={() => {
                              setModal(true);
                              setDeleteId(item._id);
                            }}
                            className="btn btn-error btn-xs text-white"
                          >
                            Delete
                          </label>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {modal && (
          <ConfirmModal setModal={setModal} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default ManageAllOrders;

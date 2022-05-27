import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";

const MyOrder = ({refetch, isLoading}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [myOrder, SetMyOrder] = useState([]);
  useEffect(()=>{
    if (user) {
      fetch(`http://localhost:5000/bookingByEmail?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${res.statusText} Access!!! Please Login again`,
            });
          }
          return res.json();
        })
        .then((data) => {
          SetMyOrder(data);
        });
    }
  }, [user])

  const handleDelete = (result) => {
    if (result) {
      console.log(deleteId);
      fetch(`http://localhost:5000/bookingById/${deleteId}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              icon: 'success',
              title: 'Delete Successfully'
          })
          setDeleteId(null)
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
      <div className=" w-full">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          My Order
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {myOrder &&
                myOrder.map((myOrder, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td className=" capitalize">{myOrder.toolsName}</td>
                    <td>{myOrder.quantity} pcs</td>
                    <td>{myOrder.price} tk</td>
                    <td>
                    {(myOrder.price && !myOrder.paid) ? (
                      <>
                    <Link to={`/dashboard/payment/${myOrder._id}`} > 
                    <button className='btn btn-xs btn-warning'>Pay</button></Link> {" "}

                    <label
                     htmlFor="delete-modal"
                     onClick={() => {
                       setModal(true);
                       setDeleteId(myOrder._id);
                     }}
                     className="btn btn-error btn-xs text-white"
                   >
                     Cancel
                   </label>
                      </>
                    ):
                    <div>
                      <p><span className='btn btn-xs btn-success'>Paid</span></p>
                      <small><b>Transaction id: </b><i className="text-red-600">{myOrder.transactionId}</i></small>
                    </div>

                  }
                    </td>

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {modal && (
          <DeleteModal setModal={setModal} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default MyOrder;

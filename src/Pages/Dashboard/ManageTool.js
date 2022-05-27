import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";

const ManageTool = () => {
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch(`http://localhost:5000/tool`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    }).then((res) => res.json())
  );

  const handleDelete = (e) => {
    if (e) {
      fetch(`http://localhost:5000/toolsById?id=${deleteId}`, {
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
      <div className=" lg:pl-5 w-full">
        <h2 className=" text-center text-primary text-4xl mb-5">
          Manage product
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Available Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tools &&
                tools.map((item, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td className=" capitalize">{item.name}</td>
                    <td>{item.quantity} pcs</td>
                    <td>{item.price}$</td>
                    <td>
                      <label
                        htmlFor="delete-modal"
                        onClick={() => {
                          setModal(true);
                          setDeleteId(item._id);
                        }}
                        className="btn btn-error btn-xs text-white"
                      >
                        Delete
                      </label>
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

export default ManageTool;

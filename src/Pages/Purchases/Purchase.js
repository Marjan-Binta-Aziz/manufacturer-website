import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const Purchase = () => {
  const [disable, setDisable] = useState(false);
  const [authUser] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const { toolsId } = useParams();
  const navigate = useNavigate();
  const { data: tools, isLoading } = useQuery("toolsById", () =>
    fetch(`http://localhost:5000/toolsById?id=${toolsId}`).then((res) =>
      res.json()
    )
  );

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const minQ = parseInt(tools.min_ord_quantity);
    const maxQ = parseInt(tools.quantity);
    if (quantity >= minQ && quantity <= maxQ) {
      const userName = authUser.displayName;
      const email = authUser.email;
      const mobile = event.target.mobile.value;
      const address = event.target.address.value;
      const toolsId = tools._id;
      const toolsName = tools.name;
      const quantity = event.target.quantity.value;
      const price = parseInt(quantity) * parseInt(tools.price);
      const paymentData = {
        userName,
        email,
        toolsId,
        toolsName,
        price,
        quantity,
        mobile,
        address,
      };
      // console.log(paymentData);

      await fetch(`http://localhost:5000/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            event.target.reset();
            Swal.fire({
              icon: "success",
              title: "Booked",
              text: `You Booked ${toolsName} Price: ${price}`,
            });
            navigate("/dashboard/my-order");
          }
        });
    } else {
      setDisable(true);
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: `You Can Book For Minimum 100 Maximum ${maxQ} 
        But You Book for ${quantity}`,
      });
    }

    setLoading(false);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="pt-5 justify-center px-5 mx-32 min-h-screen">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Purchase
        </h2>
      <div className="flex flex-row-reverse gap-5 lg:col-span-2 sm:col-span-1">
        <div className="card w-fit h-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-2xl font-bold">Name: {tools.name}</h2>
            <p>Description: {tools.description}</p>
            <p>Minimum_Order_quantity: {tools.min_ord_quantity}</p>
            <p>Available_Quantity: {tools.quantity}</p>
            <p>Price: {tools.price}</p>
            <p className="text-red-600 text-xl">Your Total Price: {parseInt(quantity) * parseInt(tools.price)}</p>
          </div>
        </div>
        <div className="w-full max-w-lg mx-auto">
          <h2 className=" text-3xl text-primary text-center mt-10 mb-0">
            Fill this Form Carefully!
          </h2>
          <form onSubmit={handleForm}>
            <div className="form-control w-full max-w-lg">
              <input
                required
                type="text"
                value={authUser?.displayName}
                disabled
                className="input input-bordered input-primary w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="email"
                value={authUser?.email}
                disabled
                className="input input-bordered input-primary w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="number"
                name="quantity"
                onKeyUp={(event) => {
                  setQuantity(parseInt(event.target.value));
                  setDisable(false);
                }}
                defaultChecked={parseInt(tools.min_ord_quantity)}
                placeholder={`min Quantity: ${tools.min_ord_quantity}`}
                className="input input-bordered input-error w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="text"
                name="mobile"
                placeholder="Phone"
                className="input input-bordered input-primary w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <textarea
                required
                name="address"
                className="textarea input-sm my-3 textarea-primary"
                placeholder="Address"
              ></textarea>
            </div>
            <button
              disabled={disable}
              className={` btn btn-primary mt-5 w-full ${
                loading && "loading"
              }`}
            >
              {loading ? "" : "Buy now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
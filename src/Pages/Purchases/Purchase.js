import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const Purchase = () => {
  const [disable, setDisable] = useState(false);
  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const { toolId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("toolsId", () =>
    fetch(`http://localhost:5000/toolsId?id=${toolId}`).then((res) =>
      res.json()
    )
  );

  const handleBooking = async (event) => {
    event.preventDefault();
    setLoading(true);

    const minQuantity = parseInt(data.min_ord_quantity);
    const maxQuantity = parseInt(data.quantity);
    if (quantity >= minQuantity && quantity <= maxQuantity) {
      const Name = user.displayName;
      const email = user.email;
      const phone = event.target.phone.value;
      const address = event.target.address.value;
      const toolId = data._id;
      const toolsName = data.name;
      const quantity = event.target.quantity.value;
      const price = parseInt(quantity) * parseInt(data.price);

      const payment = {
        Name,
        email,
        toolId,
        toolsName,
        price,
        quantity,
        phone,
        address,
      };

      await fetch(`http://localhost:5000/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
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
            navigate("/dashboard/myOrder");
          }
        });
    } else {
      setDisable(true);
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: `You Can Book For Minimum 100 Maximum ${maxQuantity} 
        But You Book for ${quantity}`,
      });
    }
    setLoading(false);
  };
  const handleQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
    setDisable(false);
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
        <div className="card h-fit bg-base-100 shadow-xl w-fit">
          <div className="card-body">
            <h2 className=" text-2xl font-bold">Name: {data.name}</h2>
            <p>Description: {data.description}</p>
            <p>Minimum_Order_quantity: {data.min_ord_quantity}</p>
            <p>Available_Quantity: {data.quantity}</p>
            <p>Price: {data.price}</p>
            <p className="text-red-600 text-xl">
              Your Total Price: {parseInt(quantity) * parseInt(data.price)}
            </p>
          </div>
        </div>
        <div className="w-full max-w-lg mx-auto">
          <h2 className=" text-3xl text-primary text-center mt-10 mb-0">
            Fill this Form Carefully!
          </h2>
          <form onSubmit={handleBooking}>
            <div className="form-control w-full max-w-lg">
              <input
                required
                type="text"
                value={user?.displayName}
                disabled
                className="input input-bordered input-primary w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="email"
                value={user?.email}
                disabled
                className="input input-bordered input-primary w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="number"
                name="quantity"
                onKeyUp={handleQuantity}
                defaultChecked={parseInt(data.min_ord_quantity)}
                placeholder={`min Quantity: ${data.min_ord_quantity}`}
                className="input input-bordered input-error w-full max-w-lg input-sm my-3"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <input
                required
                type="text"
                name="phone"
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
            <button disabled={disable} className="btn btn-primary mt-5 w-full">
              Buy now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, error, data, refetch } = useQuery(["updateUserInfo"], () =>
    fetch(
      `https://rocky-stream-44489.herokuapp.com/usersByEmail?email=${user?.email}`
    ).then((res) => res.json())
  );
  console.log(data);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Sorry",
      text: `You Information is not Updated`,
    });
  }
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleUpdateUserInfo = (event) => {
    event.preventDefault();
    const name = event?.target?.name?.value || data?.name;
    const email = event?.target?.email?.value || data?.email;
    const address = event?.target?.address?.value || data?.address;
    const location = event?.target?.location?.value || data?.location;
    const mobile = event?.target?.mobile?.value || data.mobile;

    const userData = {
      name,
      email,
      address,
      location,
      mobile,
    };

    fetch(
      `https://rocky-stream-44489.herokuapp.com/usersByEmail?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Thanks",
          text: `You Information is Updated`,
        });
        navigate("/dashboard");
        refetch();
      });
  };

  return (
    <div className="flex justify-center mb-10">
      <div className=" w-full max-w-lg">
        <h3 className=" text-center text-primary text-2xl mt-10 uppercase">
          update your info below
        </h3>
        <form onSubmit={handleUpdateUserInfo}>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Your Name:</span>
            </label>
            <input
              type="text"
              defaultValue={data.name || "none"}
              disabled
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              type="email"
              value={data.email}
              disabled
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Location:</span>
            </label>
            <div className="form-control w-full max-w-lg">
              <select
                name="location"
                id=""
                className="select input-bordered input-primary w-full max-w-lg"
              >
                <option disabled selected hidden>
                  Location ?
                </option>
                <option value="inside-dhaka">Inside Dhaka</option>
                <option value="outside-dhaka">Outside Dhaka</option>
                <option value="another">Another</option>
              </select>
            </div>
            <label className="label">
              <span className="label-text">Address:</span>
            </label>
            <input
              required
              type="text"
              defaultValue={data.address}
              name="address"
              placeholder="Address"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Mobile:</span>
            </label>
            <input
              required
              type="text"
              defaultValue={data.mobile}
              name="mobile"
              placeholder="Mobile"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>

          <button className="btn btn-primary w-full mt-4"> Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

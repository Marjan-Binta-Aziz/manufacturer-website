import React, { useState } from "react";

import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [rating, setRating] = useState(1); // initial rating value
  const [user] = useAuthState(auth);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
  };
  const onSubmit = (data) => {
    //  if user data is valid then
    if (!data.Name) {
      return <Loading></Loading>;
    } else {
      data.rating = rating;
      if (user.photoURL) {
        data.img = user.photoURL;
      } else {
        data.img =
          "https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg";
      }

      //   fetch the post API
      fetch("https://rocky-stream-44489.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            setSuccess(true);
            navigate('/all-review')
          }
        });
    }
  };
  return (
    <div className="mx-auto">
      <p className="mb-md-5 mb-3">Please Give Your Feedback</p>
      {success ? (
        Swal.fire({
          icon: "success",
          title: "Thanks for your Feedback",
          text: `reviews added`,
        })
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={30}
              style={{ display: "flex" }}
              label
              transition
              fillColor="orange"
              emptyColor="gray"
              className="w-fit"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="input input-bordered input-primary input-sm w-full max-w-xs mt-2"
              id="floatingInput"
              value={user?.displayName}
              {...register("Name")}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={user?.email}
              className="input input-bordered input-primary input-sm w-full max-w-xs mt-2"
              id="floatingInput"
              {...register("Email")}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Message"
              className="input input-bordered input-primary input-sm w-full max-w-xs mt-2"
              id="floatingInput"
              {...register("message")}
              required
            />
          </div>

          <input
            className="btn btn-primary px-3"
            type="submit"
            value="Add Feedback"
          />
        </form>
      )}
    </div>
  );
};

export default AddReview;

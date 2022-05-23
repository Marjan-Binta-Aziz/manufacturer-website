import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || guser);

  let errorElement;

  if (gloading || loading || updating) {
    return <Loading></Loading>;
  }
  if (gerror || error || updateError) {
    errorElement = (
      <p className="m-0 text-red-600">
        {error?.message || gerror?.message || updateError?.message}
      </p>
    );
  }

  if (token) {
    navigate("/appointment");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    console.log(data, data.name);
  };

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Sign Up</h2>
          <div className="card-actions justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-actions justify-center"
            >
              <input
                    type="name"
                    className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
                    placeholder="Full Name "
                    {...register("name", { required: true })}
                />

                {errors.name?.type === "required" && (
                    <p className=" m-0 text-red-600">Your Name is required</p>
                )}

              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email required",
                  },
                  pattern: {
                    value: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
                    message: "Please Provide Valied Email",
                  },
                })}
              />

              <>
                {errors.email?.type === "required" && (
                  <p className="m-0 text-red-600">{errors.email.message}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="m-0 text-red-600">{errors.email.message}</p>
                )}
              </>

              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password minimum 6 or more character",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
              />

              <>
                {errors.password?.type === "required" && (
                  <p className="m-0 text-red-600">{errors.password.message}</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="m-0 text-red-600">{errors.password.message}</p>
                )}
              </>
              {errorElement}

              <button
                type="submit"
                className="btn btn-secondary w-full mt-5 "
              >
                Sign Up
              </button>
            </form>
            <p>
              Already have an Account? {""}
              <small></small>
              <span>
                <Link to="/signIn" className="text-red-400">
                  Please Sign In
                </Link>
              </span>
            </p>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-secondary "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              stroke="currentColor"
              viewBox="0 0 970 450"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
            Signup with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

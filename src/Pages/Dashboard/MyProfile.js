import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from "../Shared/Loading";
const Profile = () => {
    const [user] = useAuthState(auth);
  
    const { isLoading, error, data, refetch } = useQuery(['updateUserInfo'], () =>
    fetch(`http://localhost:5000/usersByEmail?email=${user?.email}`)
    .then(res => res.json())
    )
    console.log(data);
    if(error){
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: `You Information is not Updated`,
    });
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    
    const handleUpdateUserInfo = (event) => {
        event.preventDefault();
        const name = event?.target?.name?.value || data?.name;
        const email = event?.target?.email?.value || data?.email;
        const address = event?.target?.address?.value || data?.address;
        const mobile = event?.target?.mobile?.value || data.mobile;
        const linkedin = event?.target?.linkedin?.value || data?.linkedin;
        const location = event?.target?.location?.value || data?.location;
        const education = event?.target?.education?.value || data?.education;

        const userData = {
            name,
            email,
            address,
            mobile,
            linkedin,
            location,
            education,
        }

        fetch(`http://localhost:5000/usersByEmail?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
              icon: "success",
              title: "Thanks",
              text: `You Information is Updated`,
          });
            refetch()
        })
    }

    return (
      <div className="flex justify-center">
      <div className=" w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          My Profile
        </h2>
        <div className="card w-full max-w-lg bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <p>Name: {data.name}</p>
            <p>Email: {data.email} </p>
            <p>Role: {data.role || "user"} </p>
            <p>Mobile: {data.mobile || "none"} </p>
          </div>
        </div>
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

          <button
            className=  "btn btn-primary w-full mt-10"> Update 
          </button>
        </form>
      </div>
    </div>
    );
};

export default Profile;
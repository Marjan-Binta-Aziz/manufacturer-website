import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddaNewTool = () => {
    const { register, formState: { errors }, handleSubmit, reset,} = useForm();

    const [loading, setLoading] = useState(false);

    const imgStorageKey = '79400c50a495583eef49533f81104895'

    const onSubmit = async (data) => {
        setLoading(true);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
            .then((result) => {
            if (result.success) {
                const img = result.data.url;
                const name = data.name;
                const description = data.description;
                const min_ord_quantity = data.minQ;
                const quantity = data.availQ;
                const price = data.price;
                const toolType = data.type;
                const tool = { img, name, description, min_ord_quantity, quantity, price, toolType};
                //send to database
            fetch(`http://localhost:5000/tool`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(tool),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    Swal.fire({
                      icon: "success",
                      title: "Done",
                      text: `Product added successfully`,
                  });
                  }
                });
            }
          });
        reset();
        setLoading(false);
      };
return (
    <div>
        <div className=" flex justify-center">
<div className=" w-full max-w-lg">
    <h2 className=" text-center text-primary text-4xl mb-5">
    Add Tool
    </h2>
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="form-control w-full max-w-lg">

        <input
          {...register("name", {
            required: true,
          })}
          placeholder='Tool Name'
          type="text"
          className="input input-sm  my-2 input-bordered input-primary w-full max-w-lg"
        />
        {errors.name?.type === "required" && (
          <span className="label-text text-red-500">
            Please Enter a Tool Name
          </span>
        )}
      </div>
      
      <div className="form-control w-full max-w-lg">

        <textarea
          {...register("description", {
            required: true,
          })}
          placeholder='Short Description'
          className="textarea input-sm textarea-primary w-full max-w-lg"
        ></textarea>
        {errors.description?.type === "required" && (
          <span className="label-text text-red-500">
            Please Enter a Value
          </span>
        )}
      </div>
      <div className="form-control w-full max-w-lg mt-1">

        <input
          {...register("minQ", {
            required: true,
          })}
          placeholder='Minimum Quantity'
          type="number"
          className="input input-sm my-2 input-bordered input-primary w-full max-w-lg"
        />
        {errors.minQ?.type === "required" && (
          <span className="label-text text-red-500">
            Please Enter a Value
          </span>
        )}
      </div>
      <div className="form-control w-full max-w-lg mt-1">

        <input
          {...register("availQ", {
            required: true,
          })}
          placeholder='Available Quantity'
          type="number"
          className="input input-sm my-2 input-bordered input-primary w-full max-w-lg"
        />
        {errors.availQ?.type === "required" && (
          <span className="label-text text-red-500">
            Please Enter a Value
          </span>
        )}
      </div>
      <div className="form-control w-full max-w-lg mt-1">

        <input
          {...register("price", {
            required: true,
          })}
          placeholder='Price'
          type="number"
          className="input input-sm my-2 input-bordered input-primary w-full max-w-lg"
        />
        {errors.price?.type === "required" && (
          <span className="label-text text-red-500">
            Enter the price!
          </span>
        )}
      </div>
      <div className="form-control w-full max-w-lg">
      <select name="toolType" id="" className="select select-sm input input-sm  my-2 input-bordered input-primary w-full max-w-lg">
                <option disabled selected hidden>Tool Type?</option>
                <option value="wooden">Wooden</option>
                <option value="aluminum">Aluminum</option>
                <option value="synthetic">Synthetic</option>
                <option defaultValue='not-define'>Not Define</option>
                
              </select>
          {errors.toolType?.type === "required" && (
            <span className="label-text text-red-500">
              Please Enter a Tool Type
            </span>
          )}
        </div>
        <div className="form-control w-full max-w-lg my-2 ">
        <input
          {...register("image", {
            required: true,
          })}
          placeholder=''
          type="file"
          className="w-full max-w-lg input input-primary input-bordered"
        />
        {errors.image?.type === "required" && (
          <span className="label-text text-red-500">Enter an image !</span>
        )}
      </div>
      <button
        className='mt-3 btn btn-primary w-1/2'>
            Add Tool
      </button>
    </form>
    </div>
</div>
    </div>
);
};

export default AddaNewTool;
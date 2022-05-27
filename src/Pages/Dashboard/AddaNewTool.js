import React from 'react';
import { useForm } from 'react-hook-form';

const AddaNewTool = () => {
    const { register, formState: { errors }, handleSubmit, reset,} = useForm();
return (
    <div>
        <div className=" flex justify-center">
<div className=" w-full max-w-lg">
    <h2 className=" text-center text-primary text-4xl mb-5">
    Add Tool
    </h2>
    <form>
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
      <div className="form-control w-full max-w-lg my-2 input input-primary input-bordered">
        <input
          {...register("image", {
            required: true,
          })}
          placeholder=''
          type="file"
          className="w-full max-w-lg"
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
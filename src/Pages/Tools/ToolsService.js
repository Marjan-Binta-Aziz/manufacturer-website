import React from 'react';
import { useNavigate } from 'react-router-dom';
const ToolsService = ({tool}) => {
    const {name, price, quantity,img } = tool;
    const navigate = useNavigate();
    
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
        console.log(id);
    }
    return (
        <div className=''>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl h-full">
            <div className="card-body text-center">
            <figure className="px-10 pt-10">
                <img src={img} alt="Tools"className="rounded-xl w-48 h-56" />
            </figure>
            <div className='px-10 pt-5'>
            <h2 className="text-center text-2xl font-bold text-primary">{name}</h2>
            <h2 className="text-center text-2xl text-blue-600 font-bold">Price: ${price}</h2>
            
                <p className="font-semibold text-neutral">In Stock: {quantity}</p>
            <p className="text-left ">About this item: <br /></p>
            <p  className="text-left text-sm ">{tool.description.slice(0,70)}...</p>
            </div>
            <div className="card-actions justify-center">
            <button onClick={()=> navigateToPurchase(tool._id)}
            className="btn btn-secondary uppercase " >
                Order Now
            </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ToolsService;
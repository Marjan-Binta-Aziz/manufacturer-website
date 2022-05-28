import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';

const AllTools = () => {
    const [tools, setTools] = useTools();
    

    const navigate = useNavigate();
    
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-7 pt-5 text-center'>
            {
            tools.map(tool => <>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl h-full">
            <div className="card-body text-center">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Tools"className="rounded-xl w-48 h-56" />
            </figure>
            <div className='px-10 pt-5'>
            <h2 className="text-center text-2xl font-bold text-primary">{tool.name}</h2>
            <h2 className="text-center text-2xl text-blue-600 font-bold">Price: ${tool.price}</h2>
            
                <p className="font-semibold text-neutral">In Stock: {tool.quantity}</p>
            <p className="text-left ">About this item: <br /></p>
            <p  className="text-left text-sm ">{tool.description}</p>
            </div>
            <div className="card-actions justify-center">
            <button onClick={()=> navigateToPurchase(tool._id)}
            className="btn btn-secondary uppercase " >
                Order Now
            </button>
            </div>
            </div>
        </div>
            </>)}
        </div>
        </div>
    );
};

export default AllTools;
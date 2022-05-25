import React from 'react';

const Banner = () => {
return (
<div>
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full h-96">

    <img src="https://img.freepik.com/free-vector/dry-powder-eye-shadow-splashes-cosmetics-brushes_107791-8761.jpg?t=st=1653331233~exp=1653331833~hmac=18d12108f465e642eb9c5613145d853535206fe2c6616bfe4fa815294a98a79f&w=1060" className="w-full" alt=''/> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle btn-primary text-center">❮</a> 
        <div className="max-w-md text-purple-500">
            <h1 className="text-5xl  font-bold">Hello There</h1>
            <p className="">Find a Best Brush Manufacturer?</p>
            <button className="btn btn-primary btn-sm ">Lets Go</button>
            </div>
        <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full h-96">
    <img src="https://i.ibb.co/KsKP7Kp/top-view-hand-holding-paint-brushes-with-copy-space.jpghttps://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full" alt=''/>
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle btn-primary">❮</a> 
        <div className="max-w-md text-black-200">
            <h1 className="text-4xl font-bold">Your Demand Our Work</h1>
            <p className="">Highly Customize on Demand Customizations </p>
            <button className="btn btn-primary btn-sm ">Get Started</button>
            </div>
        <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
        </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full h-96">
        <img src="https://img.freepik.com/free-vector/colorful-brush-stroke-collection-with-watercolor_65186-2416.jpg?size=626&ext=jpg&ga=GA1.2.836935915.1652009256" className="w-full" alt=''/> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle btn-primary">❮</a> 
        <div className="max-w-md text-black-200">
            <h1 className="text-5xl font-bold">Best Finishing</h1>
            <p className="">Any Kinds of Brush Can be Customized for You</p>
            <button className="btn btn-primary btn-sm ">Contact Us</button>
            </div>
        <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
        </div>
    </div> 
    </div>
</div>
        );
    };

    export default Banner;
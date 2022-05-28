import React from 'react';

const BusinessSummary = () => {
    return (
<div className='p-5'>
    <h2 className='text-4xl text-accent pb-4 uppercase'>Millions of Business Trust Us</h2>
    <h2 className='text-2xl text-accent pb-4 uppercase'>Try To Understand Client Expectation</h2>
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full gap-5">
    <div className="p-5">
        <div className="stat-figure text-blue-600 p-2">
        <svg className="inline-block w-8 h-8 stroke-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path></svg>
        </div>
        <div className="stat-value">29</div>
        <div className="stat-title">Countries</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    
    <div className="p-5">
        <div className="stat-figure text-pink-600 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="inline-block w-8 h-8 stroke-current"><path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg>
        </div>
        <div className="stat-value">500+</div>
        <div className="stat-title">Completed Delivery</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>
    
    <div className="p-5">
        <div className="stat-figure text-green-500 p-2">
        <svg className="inline-block w-8 h-8 stroke-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>        
        </div>
        <div className="stat-value">900+</div>
        <div className="stat-title">Happy Client</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
    
    
    <div className="p-5">
        <div className="stat-figure text-red-600 p-2">
        <svg className="inline-block w-8 h-8 stroke-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
        </div>
        <div className="stat-value">400+</div>
        <div className="stat-title">Reviews</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
    
</div>
        </div>
    );
};

export default BusinessSummary;
import React from 'react';

const Protfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-slate-200">
  <div class="hero-content text-center flex flex-col">
    <div class="max-w-md ">
      <h1 class="text-2xl font-bold text-accent"> <small className='text-amber-800 '>Name: </small>Marjan Binta Aziz</h1>
      <h1 class="text-2xl font-bold text-accent"><small className='text-amber-800 '>Educational Background: </small>Computer Science Engineering</h1>
      <h1 class="text-2xl font-bold text-accent"><small className='text-amber-800 '>Technologies Skill: </small>HTML, CSS, JavaScript, ReactJS, NodeJs,
              ExpressJS, MongoDB. Also I have some basic knowledge of PHP, mysql</h1>
      <p class="py-6">Here Some of my work</p>
            <a
              className=" text-yellow-500 underline block "
              href={`https://warehouse-management-724dd.web.app/`}
            >
              WearHouse Management
            </a>
            <a
              className=" text-yellow-500 underline block "
              href={`https://app.netlify.com/sites/cute-gaufre-e35806/overview`}
            >
              Tour & Cost
            </a>
            <a
              className=" text-yellow-500 underline block "
              href={`https://worldphonehut.netlify.app/`}
            >
              Search Your Favarate Phone
            </a>
    </div>
    </div>
        </div>
        </div>
    );
};

export default Protfolio;
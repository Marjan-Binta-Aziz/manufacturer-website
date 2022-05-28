import React from 'react';

const EasyPayment = () => {
    return (
        <div>
            <h2 className=" text-center text-accent text-4xl mb-2 uppercase">
        Order to Follow
      </h2>
            <ul class="steps steps-vertical lg:steps-horizontal">
    <li class="step step-primary">Set Your Quantity</li>
    <li class="step step-primary">Give Your Address</li>
    <li class="step">Easy Online Payment</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
</ul>
        </div>
    );
};

export default EasyPayment;
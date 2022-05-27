import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L2JNaLSbHnSmelMIqfUgIPZBetvjApBUUlzwQQLBRLfxzRRSQFwXHcnIXzE9wprLi8TJ0Uj1BES9kt2v31g7ANZ00iIYxGjYo');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/bookingById/${id}`;

    const { data: myOrder, isLoading } = useQuery(['bookingById', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-fit text-center'>
            <div className="card bg-base-100 shadow-xl my-12 flex justify-center">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {myOrder.Name}</p>
                    <h2 className="text-center card-title">Please Pay for {myOrder.toolsName}</h2>
                    <p>Please pay: $ {myOrder.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
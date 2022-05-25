import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';


const PurchaseModal = ({tool,setTool}) => {
    const {_id, name, quantity, price, orderQuantity,newQuantity } = tool;
    const [user] = useAuthState(auth);

    const handleBooking = (e) => {
        e.preventDefault();
        const booking = {
            bookingId: _id,
            tool: name,
            price: price,
            quantity: orderQuantity,
            name: user.displayName,
            email: user.email,
            address: e.target.address.value,
            phone: e.target.phone.value,
            paid: false,
            pending: true
        };
    
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.success) {
                Swal.fire({
                    icon: "success",
                    title: "Booked",
                    text: `You Booked for`,
                });
                } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Already have an appointment on`,
                });
                }
                // refetch();
                //close the module
                setTool(null)
            });
            }
    
return (
<div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
    <div className="modal-box text-center">
    <h3 className="font-bold text-lg">Booking For: {name}</h3>
    <label
        htmlFor="booking-modal"
        className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2"
    >
        ✕ </label> <form onSubmit={handleBooking}> 
        <input type="text" value={user?.displayName} className="input input-bordered input-secondary input-sm w-fit max-w-xs mt-4" disabled readOnly /> {''}

        <input type="text" value={user?.email} className="input input-bordered input-secondary input-sm w-fit max-w-xs mt-4" disabled readOnly/>

        <input type="text" value={quantity}$ className="input input-bordered input-secondary input-sm max-w-xs mt-4 w-full" disabled readOnly />

        <input type="text" value={price}$ className="input input-bordered input-secondary input-sm max-w-xs mt-4 w-full" disabled readOnly />

        <input type="text" name="address" placeholder="Address" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" />

        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" /> <br />

        <button type="submit" value="Book For" htmlFor="booking-modal" className="btn btn-secondary mt-5" > 
        Confirm Appointment</button>
    </form>
    </div>
    </div>
</div>
        );
};

export default PurchaseModal;
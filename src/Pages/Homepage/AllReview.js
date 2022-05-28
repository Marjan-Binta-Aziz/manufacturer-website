import React from 'react';
import useReview from '../../hooks/useReview';

const AllReview = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <div className="mx-12 my-12">
      <h2 className="text-primary uppercase font-bold text-4xl my-5 mx-auto w-[fit-content]">
        Client Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div className="text-center" key={review._id}>
            <div className="text-center m-3 p-3 ">
              <div className="avatar mr-3">
                <div className="w-10 rounded-full ring ring-red ring-offset-base-100 ring-offset-2">
                  {review.img ? (
                    <>
                      <img src={review.img} alt="" />
                    </>
                  ) : (
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <p className="text-blue-800 font-bold text-lg cursor-pointer">
                {review?.Name}
              </p>
            </div>
            <p>{review?.message.slice(0, 40)}...</p>
            <p>Rating: {review?.rating}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default AllReview;
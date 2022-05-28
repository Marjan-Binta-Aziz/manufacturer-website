import { useEffect, useState } from "react";


const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [reviews, setReviews]);


    return [reviews, setReviews]
};

export default useReview;
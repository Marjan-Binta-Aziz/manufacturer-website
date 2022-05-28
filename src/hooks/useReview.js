import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://rocky-stream-44489.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews, setReviews]);

  return [reviews, setReviews];
};

export default useReview;

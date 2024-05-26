import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import ReviewCard from '../Review/ReviewCard';

const MyReview = () => {
      const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

      useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const yourReview = data.filter(
              (myReview) => myReview.email === user.email
            );

            setReviews(yourReview);
          });
      }, []);
    
    return (
      <div>
        <div className='grid md:grid-cols-3 md:grid-cols-2'>
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    );
};

export default MyReview;
import React from 'react';

const ReviewCard = ({review}) => {
    console.log(review);
    const { name, email, photoUrl, opinion } = review;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photoUrl}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
                <h2 className="card-title">{ name}</h2>
                <p>{ email}</p>
                <p>{ opinion}</p>
          <div className="card-actions">
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;
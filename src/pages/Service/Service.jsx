import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service);
    const { _id,name, picture, ratting, price, Description } = service;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-accent">${ price}</div>
          </h2>
            <p>{Description.slice(0,100)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`} className="badge badge-outline hover:bg-cyan-400 hover:text-white">Details</Link>
            <Link to={`/reviews/${_id}`} className="badge badge-outline hover:bg-cyan-400 hover:text-white">Add Review</Link>
          </div>
        </div>
      </div>
    );
};

export default Service;
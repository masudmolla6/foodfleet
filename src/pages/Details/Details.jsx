import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const food = useLoaderData();
    console.log(food);
    const { _id, name, picture, ratting, price, Description } = food;
    return (
      <div className="flex flex-col justify-center items-center my-3">
          <h2 className='text-3xl pb-3 text-orange-500'>{name}</h2>
            <img src={picture} alt="" />
            <p className='text-2xl pt-2'>price:${ price}</p>
          <p className='pt-2 px-2'>{Description}</p>
      </div>
    );
};

export default Details;
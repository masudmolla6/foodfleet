import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import ReviewCard from './ReviewCard';

const Review = () => {
  const food = useLoaderData();
  const { _id, name, picture, ratting, price, Description } = food;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const opinion = form.opinion.value;

    console.log(name, email, photoUrl, opinion);
    const review = { name, email, photoUrl, opinion };

    fetch(`http://localhost:5000/addreview`, {
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Your Review is Added Successfully.");
          form.reset();
        }
    })

  }

    return (
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Add Review!</h1>
              </div>
              <div className="card shrink-0 w-2/3 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name='name'
                      placeholder="Enter Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name='email'
                      placeholder="Enter Your Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      name='photoUrl'
                      defaultValue={picture}
                      placeholder="Enter Review Food Photo"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Opinion</span>
                    </label>
                    <input
                      type="text"
                      name='opinion'
                      placeholder="Your Opinion"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-full mt-6">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;
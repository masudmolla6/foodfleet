import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    console.log(user);
        const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

            console.log(email, password);
            
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                })
                .catch(error => {
                console.error(error);
                })
            
        };
    return (
      <>
        <Helmet>
          <title>FoodFleet | SignUp</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span to="" className="label-text-alt link link-hover">
                      Already Have An Account?{" "}
                      <Link to="/login" className="text-blue-700 underline">
                        LogIn
                      </Link>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="SignUp"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignUp;
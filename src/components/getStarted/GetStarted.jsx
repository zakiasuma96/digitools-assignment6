import React from "react";
import User from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from"../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-6xl font-extrabold mb-5 mt-8 ">
          Get Started In 3 Steps
        </h2>
        <p className="text-xl font-medium text-gray-500">
          Start using premium digital tools in minutes, not hours
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {/* card-1  */}
        <div className="card bg-base-100 shadow-sm ">
          <div className="flex items-center justify-end gap-2 mr-4 mt-2 mb-8">
            <div className="badge w-7 h-7 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center  ">
              1
            </div>
          </div>

          <figure>
            <img
              className=" rounded-full p-5 bg-purple-100 w-[80px] h-[80px]"
              src={User}
              alt="User"
            />
          </figure>
          <div className="card-body flex items-center text-center">
            <h2 className="card-title text-2xl font-bold leading-6">
              Create Account
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>
        {/* card-2  */}
        <div className="card bg-base-100 shadow-sm ">
          <div className="flex items-center justify-end gap-2 mr-4 mt-2 mb-8">
            <div className="badge w-7 h-7 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center  ">
              2
            </div>
          </div>

          <figure>
            <img
              className=" rounded-full p-5 bg-purple-100 w-[80px] h-[80px]"
              src={Package}
              alt="Package"
            />
          </figure>
          <div className="card-body flex items-center text-center">
            <h2 className="card-title text-2xl font-bold leading-6">
              Choose Products
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Browse our catalog and select the tools <br />
that fit your needs.
            </p>
          </div>
        </div>
        {/* card-3  */}
        <div className="card bg-base-100 shadow-sm ">
          <div className="flex items-center justify-end gap-2 mr-4 mt-2 mb-8">
            <div className="badge w-7 h-7 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center  ">
              3
            </div>
          </div>

          <figure>
            <img
              className=" p-5 rounded-full bg-purple-100 w-[80px] h-[80px]"
              src={Rocket}
              alt="Rocket"
            />
          </figure>
          <div className="card-body flex items-center text-center">
            <h2 className="card-title text-2xl font-bold leading-6">
              Start Creating
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Download and start using your premium <br /> 
tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

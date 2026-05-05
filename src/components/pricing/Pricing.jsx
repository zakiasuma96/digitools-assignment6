import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="mt-20 mb-20 container mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-500 mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid items-center justify-items-center grid-cols-1  md:grid-cols-3 gap-8">
        {/* pricing 1 */}
        <div className="card w-90 bg-[#F2F2F2] shadow-sm rounded-2xl">
          <div className="card-body ">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-2xl font-bold">Starter</h2>
              <p className="text-[16px] text-gray-400 font-medium">
                Perfect for getting started
              </p>
              <span className="text-2xl font-extrabold">
                $0
                <span className="text-lg font-medium text-gray-500">
                  /Month
                </span>{" "}
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Basic templates</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full btn-block text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        {/* pricing 1 */}
        <div className="card w-90 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-sm text-white rounded-2xl">
          <div className="card-body ">
            <div className="flex flex-col items-start gap-2 relative"> 
              <div className=" flex items-center justify-center absolute -top-9 right-25 ">

              <span className="badge bg-amber-200  text-amber-800 rounded-full">Most Popular</span>
              </div>
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-[16px] text-gray-200 font-medium">
                Best for professionals 
              </p>
              <span className="text-2xl font-extrabold">
                $29
                <span className="text-lg font-medium text-gray-200">
                  /Month
                </span>
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>Access to all premium tools</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>Unlimited projects </span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>1 Cloud sync</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-white text-xl" />
                <span>1 Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6 ">
              <button className="btn bg-white  rounded-full btn-block ">
                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">Start Pro Trial</span>
              </button>
            </div>
          </div>
        </div>
        {/* pricing 1 */}
        <div className="card w-90 bg-[#F2F2F2] shadow-sm rounded-2xl">
          <div className="card-body ">
            <div className="flex flex-col items-start gap-2">
              
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className="text-[16px] text-gray-400 font-medium">
                For teams and businesses
              </p>
              <span className="text-2xl font-extrabold">
                $99
                <span className="text-lg font-medium text-gray-200">
                  /Month
                </span>
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>1 Dedicated support </span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>1 SLA guarantee</span>
              </li>
              <li className="flex items-center gap-3  ">
              <TiTick  className="text-green-400 text-xl" />
                <span>1 Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full btn-block text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Pricing;

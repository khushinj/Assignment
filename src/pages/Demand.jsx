import React from 'react';
import img3 from '../assets/ondemand.png';

export default function Demand() {
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full bg-[#f9f7f4] min-h-[410px] px-6 lg:px-24 py-8 lg:py-0">

            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-6">
                    On-Demand Delivery Solutions <br className="hidden lg:block" /> for Everyone
                </h1>
                <p className="text-gray-600 text-base lg:text-lg pb-40">
                    Whether you’re an individual, restaurant, or enterprise, Rapidmate offers
                    flexible, reliable, and secure delivery services.
                </p>
            </div>


            <div className="lg:w-1/2 flex items-end justify-end h-full">
                <img
                    src={img3}
                    alt="On-Demand"
                    className="h-full w-auto object-cover -me-24"
                />
            </div>
        </div>
    );
}

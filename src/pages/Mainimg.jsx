import React from 'react';
import Mainimg from '../assets/mainimg.png';
import movers from '../assets/movers.png';
import order from '../assets/order.png';
import schedule from '../assets/schedulee.png';

export default function MainSection() {


    return (
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden -mt-10">

            <img src={Mainimg} alt="Main" className="w-[300px] md:w-[400px] lg:w-[500px] z-10" />


            <div className="absolute top-8 left-8 bg-white rounded-xl shadow-md p-4 w-[250px] space-y-3 z-20">
                <div className="flex items-center justify-between border-b pb-2">
                    <input className="text-sm text-gray-600 h-full py-2 ps-1" placeholder='📍 Enter pickup address'/>
                    <span>➔</span>
                </div>
                <div className="flex items-center justify-between">
                    <input className="text-sm text-gray-600 py-2 ps-1" placeholder='📍 Enter drop-off address'/>
                    <span>➔</span>
                </div>
            </div>


            <img src={movers} alt="Movers" className="absolute top-28 right-12 p-2 bg-none w-[150px] z-20" />


            <div className="absolute bottom-44 left-6 bg-white rounded-xl shadow p-2 flex flex-col items-center w-[130px] z-20">
                <img src={schedule} alt="Schedule" className="w-full rounded" />
            </div>

            <div className="absolute bottom-20 right-10 bg-white shadow-sm rounded-md p-3 w-[270px] z-20">
                    <img src={order} alt="Order Status" className="w-full h-full" />
            </div>
        </div>
    );
}

import React from 'react'
import Navbar from './Navbar'
import { BsChatText } from "react-icons/bs"
import { HiOutlinePlayCircle } from "react-icons/hi2"
// import img1 from '../assets/heroimg.png'
import Sections from './Sections'
import About from './About'
import Demand from './Demand'
import Fleet from './Fleet'
import Contact from './Contact'
import MainimgComponent from './Mainimg';

export default function Home() {
    return (
        <div className="bg-[linear-gradient(to_bottom,_#FFF2CE_0%,_white_100%)] min-h-screen w-full text-[#2C2C2C]">
            <Navbar />

            <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 max-w-7xl mx-auto">
                <div className="max-w-xl space-y-6 relative">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Your delivery & <br /> moving partner,<br /> in one tap
                    </h1>

                    <svg
                        viewBox="0 0 700 70"
                        className="absolute bottom-41 left-0 w-[400px] h-[40px] text-[#FF2D55]"
                        fill="none"
                    >
                        <path
                            d="M20 60 Q350 -30 680 60"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>



                    <p className="text-lg pt-12">
                        Are you tired of the hassle and stress of ordering food,
                        requesting couriers, or moving to a new home? Look no further than
                        Rapidmate!
                    </p>
                    <div className="flex items-center gap-7 pt-4 flex-wrap">
                        <button className="bg-[#FF2D55] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
                            Try free trial
                        </button>
                        <button className="flex items-center gap-2 font-medium hover:underline">
                            <HiOutlinePlayCircle className="text-3xl" /> View Demo
                        </button>
                        <button className="flex items-center gap-2 font-medium hover:underline">
                            <BsChatText className='text-2xl' /> Get in touch
                        </button>
                    </div>
                </div>

                <div className="mt-12 lg:mt-0 lg:w-[655px] lg:h-[597px]">
                    {/* <img src={img1} alt="Hero Image" className="w-full h-auto object-contain" /> */}
                    <MainimgComponent/>
                </div>
            </div>


        </div>
    )
}

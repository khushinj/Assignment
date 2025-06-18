import React from 'react'
import img7 from '../assets/team2.png'


export default function Contact() {
    return (
        <div>
            <div className="bg-[#FBFAF5] px-10 py-16 text-center">
                <div className="flex justify-center mb-6 mt-10">
                    <img src={img7} alt="Talk to Team" className="w-100" />
                </div>
                <h3 className="text-4xl font-bold mb-4 pt-4">Talk to our team</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Our dedicated support team is here to help you with any delivery-related queries. From tracking your order to resolving issues, we’ve got you covered.
                </p>

                <button className="bg-[#FF2D55] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 hover:cursor-pointer transition">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

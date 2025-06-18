import React from 'react'
import aboutus from '../assets/aboutus.jpg'


export default function About() {
    return (
        <div>
            <div className="flex justify-center mt-10">
                <img src={aboutus} alt="About" className="w-full relative" />
            </div>
            <div className="px-10 py-16 max-w-7xl mx-auto text-left absolute bottom-0 left-0 top-260 right-0">
                <h2 className="text-3xl font-bold mb-4">About us</h2>
                <p className="text-gray-600 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur. Lorem Sollicitudin eu nibh lacus ut habitant.
                    Vitae sapien amet arcu massa massa. Etiam egestas accumsan bibendum sed.
                </p>
            </div>

            <div className="grid bg-white grid-cols-2 md:grid-cols-4 gap-6 text-center py-20">
                {[
                    ['5000+', 'Companies trust us'],
                    ['96.4%', 'Successful deliveries'],
                    ['24/7', 'Availability'],
                    ['15 min', 'Average delivery time']
                ].map(([num, text]) => (
                    <div key={text}>
                        <p className="text-4xl font-medium">{num}</p>
                        <p className="text-sm text-gray-600 pt-3">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react'
import img1 from '../assets/section1.png'
import img2 from '../assets/section2.png'
import img3 from '../assets/section3.png'
import img4 from '../assets/section4.png'
import img5 from '../assets/section5.png'

export default function Sections() {
    const items = [
        { label: 'Restaurants', image: img1, box: true },
        { label: 'Grocery', image: img2, box: false },
        { label: 'Pharmacy & Meds', image: img3, box: true },
        { label: 'Gifts', image: img4, box: false },
        { label: 'E-commerce', image: img5, box: true },
    ]

    return (
        <div className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={
                            `flex flex-col items-center justify-center h-60 w-65 cursor-pointer ` +
                            (item.box
                                ? 'bg-gray-100 w-70'
                                : 'bg-white')
                        }
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="h-14 w-14 mb-4 object-contain"
                        />
                        <p className="font-medium text-gray-800 text-center">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

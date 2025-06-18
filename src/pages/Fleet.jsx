import React from 'react'
import img4 from '../assets/fleet1.png'
import img5 from '../assets/fleet2.png'
import img6 from '../assets/fleet3.png'

export default function Fleet() {
    return (
        <div>
            <div className="px-10 py-16 max-w-7xl mx-auto bg-white">
                <h3 className="text-4xl font-bold text-center my-12">Eco-friendly Fleet</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        [img4, 'Electric & Hybrid Vehicles', 'Gradually transition to electric or hybrid vehicles to reduce carbon emissions'],
                        [img5, 'Route Optimization', 'Implement advanced routing software to minimize fuel consumption by reducing travel time and distance.'],
                        [img6, 'Bicycle or E-bike Deliveries', 'In urban areas, use bicycles or e-bikes to eliminate emissions entirely for short-distance deliveries.']
                    ].map(([img, title, desc]) => (
                        <div key={title} className="py-8 rounded-3xl bg-[#FBFAF5] text-center h-120">
                            <img src={img} alt={title} className="mx-auto mb-4 h-50 mt-6" />
                            <p className="font-bold text-2xl mb-2 mt-8 px-20">{title}</p>
                            <p className="text-sm text-gray-600 mt-4 px-12">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

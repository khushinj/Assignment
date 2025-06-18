import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className='container-fluid flex justify-end me-14'>
                <ul className='flex flex-row space-x-10 pt-8 align-items-end decoration=[#2C2C2C] font-medium'>
                    <li className='hover:cursor-pointer'>Home</li>
                    <li className='hover:cursor-pointer'>Restaurants</li>
                    <li className='hover:cursor-pointer'>Grocery</li>
                    <li className='hover:cursor-pointer'>Pharmacy & Meds</li>
                    <li className='hover:cursor-pointer'>Gifts</li>
                    <li className='hover:cursor-pointer'>E-com</li>
                    <li className='hover:cursor-pointer'> More</li>
                    <li className='hover:cursor-pointer'>Login</li>
                    <li className='-mt-2'>
                        <button className='text-white text-sm hover:cursor-pointer border border-pink-400 p-2 rounded-lg bg-rose-600'>Signup</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

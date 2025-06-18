import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#131314] text-white px-6 md:px-16 py-10">
            <hr className="border-gray-700 mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-0 gap-10">

                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Reach us</h2>
                    <div className="flex items-start gap-3  font-light">
                        <Phone className="w-5 h-5 mt-1" />
                        <span>+33761406084</span>
                    </div>
                    <div className="flex items-start gap-3  font-light">
                        <Mail className="w-5 h-5 mt-1" />
                        <span>elyas@rapidmate.fr</span>
                    </div>
                    <div className="flex items-start gap-3  font-light">
                        <MapPin className="w-5 h-5 mt-1" />
                        <span>8B Avenue Danielle Casanova, 95210 Saint-Gratien, France</span>
                    </div>
                </div>


                <div className="space-y-3">
                    <h2 className="font-semibold text-lg">Company</h2>
                    <p className=' font-light'>About</p>
                    <p className=' font-light'>Contact</p>
                    <p className=' font-light'>Blogs</p>
                </div>


                <div className="space-y-3">
                    <h2 className="font-semibold text-lg">Legal</h2>
                    <p className=' font-light'>Privacy Policy</p>
                    <p className=' font-light'>Terms & Services</p>
                    <p className=' font-light'>Terms of Use</p>
                    <p className=' font-light'>Refund Policy</p>
                </div>


                <div className="space-y-3">
                    <h2 className="font-semibold text-lg">Quick Links</h2>
                    <p className=' font-light'>Home</p>
                    <p className=' font-light'>Product</p>
                    <p className=' font-light'>FAQs</p>
                </div>


                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Join Our Newsletter</h2>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 flex-1 rounded-l-md bg-[#1E1E1E] text-[#616161]"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-r-md">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-sm text-gray-400">
                        * Will send you weekly updates and news about the company
                    </p>
                </div>
            </div>
        </footer>
    );
}

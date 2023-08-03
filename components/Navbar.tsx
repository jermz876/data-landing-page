"use client";

import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="w-full bg-[#000300] text-white ">
            <div className="flex justify-between items-center max-w-[1400px] w-full mx-auto px-4 h-24">
                <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <ul className="md:flex space-x-7 hidden">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div onClick={handleNav} className=" block md:hidden ">
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div
                    className={
                        !nav
                            ? "fixed left-0 top-0 w-[65%] h-full border-r border-r-gray-900 bg-[#000300] p-8 ease-in-out duration-500"
                            : "fixed left-[-100%] top-0 ease-in-out duration-500"
                    }
                >
                    <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
                    <ul className="pt-20  uppercase">
                        <li className="p-4 border-b border-gray-600">Home</li>
                        <li className="p-4 border-b border-gray-600">Company</li>
                        <li className="p-4 border-b border-gray-600">Resources</li>
                        <li className="p-4 border-b border-gray-600">About</li>
                        <li className="p-4">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

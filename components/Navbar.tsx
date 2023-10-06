"use client";

import Link from "next/link";
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
                <Link href="/">
                    <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
                </Link>
                <ul className="md:flex space-x-7 hidden">
                    <Link href="/">
                        <li className="hover:text-[#00df9a]">Company</li>
                    </Link>
                    <Link href="#resources">
                        <li className="hover:text-[#00df9a]">Resources</li>
                    </Link>
                    <Link href="#plans">
                        <li className="hover:text-[#00df9a]">Packages</li>
                    </Link>
                    <Link href="#socials">
                        <li className="hover:text-[#00df9a]">Contact</li>
                    </Link>
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
                    <h2 className="text-3xl font-bold text-[#00df9a]">REACT.</h2>
                    <ul className="pt-20  uppercase">
                        <Link href="/">
                            <li onClick={() => setNav(true)} className=" p-4 border-b border-gray-600 hover:text-[#00df9a]">
                                Company
                            </li>
                        </Link>
                        <Link href="#resources">
                            <li onClick={() => setNav(true)} className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
                                Resources
                            </li>
                        </Link>
                        <Link href="#plans">
                            <li onClick={() => setNav(true)} className="p-4 border-b border-gray-600 hover:text-[#00df9a]">
                                Packages
                            </li>
                        </Link>

                        <li onClick={() => setNav(true)} className="p-4 hover:text-[#00df9a]">
                            <Link href="#socials">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

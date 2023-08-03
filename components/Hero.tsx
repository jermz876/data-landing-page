// "use client";

import React from "react";
// import Typed from "react-typed";

const Hero = () => {
    return (
        <section className="w-full px-2">
            <div className="max-w-4xl w-full h-screen  mx-auto text-center flex flex-col justify-center text-white ">
                <p className="uppercase text-[#00df9a] font-semibold p-2">Growing with data analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Grow With Data</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible finacing</p>
                    {/* <Typed
                        className="md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a] pl-3"
                        strings={["BTB", "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    /> */}
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </section>
    );
};

export default Hero;

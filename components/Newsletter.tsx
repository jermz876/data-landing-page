import React from "react";

const Newsletter = () => {
    return (
        <section className="w-full text-white">
            <div className="max-w-4xl w-full mx-auto grid lg:grid-cols-2 py-16 px-4">
                <div className="lg:col-span-2 my-4">
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">Want tips & tricks to optimize your flow?</h2>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input type="email" placeholder="Enter Email" className="p-3 flex w-full rounded-md text-black" />
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">Notify Me</button>
                    </div>
                    <p>
                        We care about the protectoin of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

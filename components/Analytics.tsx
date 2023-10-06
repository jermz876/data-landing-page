import React from "react";
import Laptop from "../public/assets/laptop.jpg";

import Image from "next/image";

const Analytics = () => {
    return (
        <section id="resources" className="w-full bg-white ">
            <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 py-16 px-4">
                <Image className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className=" text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h2>
                    <p>
                        Ongoing growth in data is driving the need for a fresh approach to analytics pipelines by disaggregating compute and storage. Scale analytics
                        deployments without compromising performance to power business intelligence and real-time analytics.
                    </p>
                    <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Analytics;

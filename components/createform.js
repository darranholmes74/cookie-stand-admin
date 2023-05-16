import React, { useState } from 'react';
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";
import ReportTable from "./reportTable";

export default function CreateForm(){
    const { user } = useAuth();
    const { createResource } = useResource();
    const [cookieStore, setCookieStore] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average_cookies_per_sale.value),
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            owner: user.id,
        };
        createResource(info)
        //     .then((createdReport) => {
        // deleteReports([...reports, createdReport]);
//         incrementTableCount(createdReport);
// });

    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="flex justify-center text-black mb-4 text-2xl">Create Cookie Stand</h2>
                <div className="flex flex-row items-center justify-between pb-5">
                    <label htmlFor="location" className="block text-black mr-4">Location</label>
                    <input name="location" id="location" className="flex-1 px-4 border-2 border-gray-200"/>

                    <div className="p-2 w-full md:w-1/4 mb-4 md:mb-0">
                        <button className="bg-green-600 text-black py-8 px-12" name="create">Create</button>
                    </div>
                </div>
                <div className="flex flex-wrap">
                <div className="p-2 w-full md:w-1/4 mb-4 md:mb-0">
                    <label htmlFor="minimum" className="flex block text-black mb-2">Minimum Customers per Hour</label>
                    <input name="minimum" id="minimum" className=" px-4 border-2 border-gray-200"/>
                </div>
                <div className="p-2 w-full md:w-1/4 mb-4 md:mb-0">
                    <label htmlFor="maximum" className="flex block text-black mb-2">Maximum Customers per Hour</label>
                    <input name="maximum" id="maximum" className=" px-4 border-2 border-gray-200"/>
                </div>
                <div className="p-2 w-full md:w-1/4 mb-4 md:mb-0">
                    <label htmlFor="average" className="flex block text-black mb-2">Average Cookies per Sale</label>
                    <input name="average_cookies_per_sale" id="average" className=" px-4 border-2 border-gray-200"/>
                </div>
                </div>

            </form>
        </div>
    )
}

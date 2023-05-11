import React from "react";

export default function CreateForm({ incrementTableCount, reports, setReports }){
    const createCookieStand = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const jsonData = Object.fromEntries(data.entries());

        // Display the form data as JSON on the screen
        // const pre = document.createElement('pre');
        // pre.textContent = JSON.stringify(jsonData, null, 2);
        // document.body.appendChild(pre);
        incrementTableCount();

        const newReport = {
            location: jsonData.location,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        };
        setReports([...reports, newReport]);

    };
    return(
        <form onSubmit={createCookieStand} className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="flex justify-center text-black mb-4 text-2xl">Create Cookie Stand</h2>
            <div className="flex flex-row items-center justify-between pb-5">
                <label htmlFor="location" className="block text-black mr-4">Location</label>
                <input name="location" id="location" className="flex-1 px-4 border-2 border-gray-200"/>
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
                <input name="average" id="average" className=" px-4 border-2 border-gray-200"/>
            </div>
            <div className="p-2 w-full md:w-1/4 mb-4 md:mb-0">
                <button className="bg-green-600 text-black py-8 px-12" name="create">Create</button>
            </div>
            </div>

        </form>
    )
}
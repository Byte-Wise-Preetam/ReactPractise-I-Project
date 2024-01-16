import { useState, useEffect } from 'react';

import Shimmer from "./Shimmer";

const HomeBody = () => {

    const [ listOfRestaurants, setlistOfRestaurants ] = useState([]);
    
    fetchResData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  

        console.log("step 1 : ",data);

        const JSON = await data.json();

        console.log("step 2 :", JSON);
    }

    useEffect(()=>{
        fetchResData();
    },[]);

    if(listOfRestaurants.length === 0)
    {
        return <Shimmer/>;
    }


    return (
        <div className="">
            <div className="flex flex-wrap mx-auto">
                <div className="res-card bg-slate-300" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
                <div className="res-card" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
                <div className="res-card" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
                <div className="res-card" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
                <div className="res-card" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
                <div className="res-card" style={{width:"275px", height:"350px",border:"2px solid cyan",margin:"2rem 1.25rem"}}></div>
            </div>
        </div>
    )
}

export default HomeBody;
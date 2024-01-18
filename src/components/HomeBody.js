import { useState, useEffect } from 'react';

import Shimmer from "./Shimmer";
import RestaurantCard from './RestaurantCard';

const HomeBody = () => {

    const [ listOfRestaurants, setlistOfRestaurants ] = useState("");
    
    fetchResData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  

        console.log("step 1 : ", data);

        const JSON = await data.json();

        console.log("step 2 :", JSON);

        const onMapData = await JSON?.data?.cards

        const onlyCards = await onMapData.filter(function(card) {
            return card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget";
        });

        const fetchedData = await onlyCards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log("Step 3 - onMapData :", onMapData);

        console.log("Step 4 - onlyCards :", onlyCards);

        console.log("Step 5 - fetchedData :", fetchedData);

        setlistOfRestaurants(fetchedData);

        
    }

    useEffect(()=>{
        fetchResData();
    },[]);

    if(listOfRestaurants === "")
    {
        return <Shimmer/>;
    }


    return (
        <div className="">
            <div className="flex flex-wrap mx-auto">
                {
                    listOfRestaurants.map( restaurant => <RestaurantCard resData={restaurant} key={restaurant.info.id} />)
                }
            </div>
        </div>
    )
}

export default HomeBody;
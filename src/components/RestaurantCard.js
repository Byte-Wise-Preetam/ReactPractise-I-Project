const RestaurantCard = (props) => {

    const { resData } = props;

    const {name, costForTwo, areaName, cloudinaryImageId, avgRating, isOpen } = resData?.info;



    console.log("Step 6 :",props);

    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <div className="resContent">
                <h2>{name}</h2>
                <h5>{areaName}</h5>
                <h6>{costForTwo}</h6>
                <h6>{avgRating}</h6>


            </div>
        </div>
    )
}

export default RestaurantCard;
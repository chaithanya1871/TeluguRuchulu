import { useParams } from "react-router-dom";
import { useResMenuData } from "../../hooks/useResMenuData";
import { REACT_MEDIA_ASSETS_BASE_URL } from "../../utils/constants";
import { CiStar } from "react-icons/ci";
import MenuCard from "./Components/MenuCard";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurant,menuData] = useResMenuData(resId);
    if(!restaurant){
        return <div className=" text-2xl text-center">Loading........ </div>
    }
    return (
        <div className="flex  flex-col items-center max-w-[1080px]">
            <div className=" flex gap-5 bg-[#171717] p-4 w-[800px] h-[200px]">
                <img src={REACT_MEDIA_ASSETS_BASE_URL+restaurant?.cloudinaryImageId} className=" w-[250px]  bg-transparent"/>
                <div>
                    <h2 className=" text-white text-xl">{restaurant?.name}</h2>
                    <h4 className=" text-white mt-4">{restaurant?.cuisines.join(", ")}</h4>
                    <div className=" flex gap-5 text-white mt-10">
                    <div className={`flex justify-center items-center text-white font-bold ${restaurant?.avgRatingString > 4 ? 'bg-green-600' : restaurant?.avgRatingString >= 3 && restaurant?.avgRatingString <= 4 ? 'bg-yellow-500' : 'bg-red-600'}`}>
                    <h4>{restaurant?.avgRatingString}</h4>
                        <CiStar />
                    </div>  
                    <h4>{restaurant?.sla?.lastMileTravelString ?? "2.0 km"}</h4>
                    <h4>{restaurant?.costForTwo}</h4>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-start w-[700px]">
                <h2 className=" mt-10 self-start text-2xl font-bold">Recommended</h2>
                <h3 className=" mb-4">{menuData?.length} Items</h3>
            </div>

            
            <div className=" flex  flex-col justify-center items-center flex-wrap w-[700px]" >
                {menuData && menuData.map((menuItem)=>(
                    <MenuCard card = {menuItem} key={menuItem?.id}/>
                ))}
            </div>

        </div>

        
    );
};

export default RestaurantMenu;
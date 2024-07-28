import { useNavigate } from "react-router-dom";
import { REACT_MEDIA_ASSETS_BASE_URL } from "../../../utils/constants";
import { CiStar } from "react-icons/ci";


const RestaurantCard = ({resData}:any) => {
    const navigate = useNavigate();
    const viewRestaurantMenu = (resId:number) =>{
        navigate(`res-menu/${resId}`)
    }
    return (
        <div className="w-[240px] p-3 cursor-pointer border border-slate-100 m-5 rounded-md shadow-md" onClick={()=>{viewRestaurantMenu(resData?.info.id)}}>
            <img src={REACT_MEDIA_ASSETS_BASE_URL+resData?.info?.cloudinaryImageId} className=" w-full"/>
            <h2 className=" font-bold">{resData?.info.name}</h2>
            <h3 className=" overflow-ellipsis whitespace-nowrap overflow-hidden">{resData?.info?.cuisines?.join(',')}</h3>
            <div className=" flex justify-between">
            <div className={`flex justify-center items-center text-white font-bold ${resData?.info.avgRatingString > 4 ? 'bg-green-600' : resData?.info.avgRatingString >= 3 && resData?.info.avgRatingString <= 4 ? 'bg-yellow-500' : 'bg-red-600'}`}>
                    <h4>{resData?.info.avgRatingString}</h4>
                    <CiStar />
                </div>  
                <h4>{resData?.info.sla?.lastMileTravelString ?? "2.0 km"}</h4>
                <h4>{resData?.info.costForTwo}</h4>
            </div>
        </div>
    ); 
};

export default RestaurantCard;
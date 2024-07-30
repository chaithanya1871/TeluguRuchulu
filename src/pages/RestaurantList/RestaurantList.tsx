import { useContext, useState } from "react";
import { useResData } from "../../hooks/useResData";
import RestaurantCard from "./Components/RestaurantCard";
import LocationContext from "../../context/useLocationContext";
function filterData(searchText:string, restaurants:any) {
    console.log(searchText);
    const filterData = restaurants.filter((restaurant:any) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
  

const RestaurantList = () => {
    const {latitude, longitude} = useContext(LocationContext);
    console.log(latitude,longitude, "txt")
    const [searchTxt, setSearchTxt] = useState<string>("");
    const [restaurantData, filteredRestaurantData] = useResData(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`);

    const [filteredRes, setFilteredRes] = useState([]);
    const searchData  =(search_text:string, restaurants:any) =>{
        if(search_text!==""){
            const filtered_res = filterData(search_text,restaurants);
            console.log(filteredRes);
            setFilteredRes(filtered_res);
        }
        else{
            setFilteredRes(restaurantData);
        }

    }
    console.log("feffe", filteredRestaurantData);
    if(filteredRestaurantData?.length===0){
        return <div className=" text-center text-2xl">Loading.....</div>
    }
    return (
        <div className=" ">
            <div className=" flex justify-center m-10">
                <input type="text" placeholder="Search a restaurant you want..." value={searchTxt} onChange={(e)=>{
                    const newSearchTxt = e.target.value;
                    setSearchTxt(newSearchTxt);
                    searchData(newSearchTxt,restaurantData);
                }} className=" outline-orange-400 p-1 w-[40%] rounded-md"/>
                <button className=" border bg-[#F97316] text-white px-3 py-1 ml-[-3px] rounded-md">Search</button>
            </div>
            {restaurantData?
            <div className=" flex justify-center items-center flex-wrap">
                {(filteredRes.length ==0? filteredRestaurantData : filteredRes).map((data:any)=>(
                    <RestaurantCard resData={data} key={data.info.id}/>
                ))}
                
            </div>:<div>Loadinggggg</div>}
        </div>
    );
    console.log(restaurantData);
};

export default RestaurantList;
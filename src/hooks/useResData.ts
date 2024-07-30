import axios from "axios";
import { useEffect, useState } from "react"

function checkJsonData(jsonData:any) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      // initialize checkData for Swiggy Restaurant data
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
export const useResData = (API_URL:string)=>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[]);
    async function getRestaurants() {
        try{
            const response = await axios.get(API_URL);
            const res_data = checkJsonData(response.data);
            console.log(res_data);
            setAllRestaurants(res_data);
            setFilteredRestaurants(res_data);
        }
        catch (error){
            setAllRestaurants([]);
            setFilteredRestaurants([]);
        }
    }
    return [allRestaurants, filteredRestaurants];

}
import { useEffect, useState } from "react"
import { FOODFIRE_MENU_API_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../utils/constants";
import axios from "axios";

export const useResMenuData = (resId:string | undefined) =>{
    const [restaurant, setRestaurant] = useState(null);
    const [menuData, setMenuData] = useState([]);

    useEffect(()=>{
        getRestaurantMenuData();

    },[])
    async function getRestaurantMenuData() {
        try{
            const response = await axios.get(FOODFIRE_MENU_API_URL+resId);

            const restaurantData = response.data.data.cards
                            .map((card: any) => card)
                            .find((x: any) => x.card.card["@type"] == RESTAURANT_TYPE_KEY)
                            ?.card?.card?.info || null;

            setRestaurant(restaurantData);
            const menuItemsData = response.data.data.cards.find((x:any)=>x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x:any) => x.card?.card)?.filter((x:any) => x["@type"] == MENU_ITEM_TYPE_KEY) ?.map((x:any) => x.itemCards)
            .flat()
            .map((x:any) => x.card?.info) || [];

            const uniqueMenuItems:any[] = [];
            menuItemsData.forEach((item:any) => {
                if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                  uniqueMenuItems.push(item);
                }
              });
            setMenuData(menuItemsData);
        }
        catch (error){
            console.log(error);
        }  
    }
    return [restaurant,menuData];
}
import { useContext, useEffect, useState } from "react"
import LocationContext from "../context/useLocationContext";

const useAddress = ()=>{
    const {latitude, longitude} = useContext(LocationContext);
    const [address, setAddress] = useState<string>("");
    const getAddress = async ()=>{
        const address_url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=66a8865b67924072506462bkm1418c8`
        const resp = await fetch(address_url);
        const data = await resp.json();
        console.log(data);
        setAddress(data.display_name)
    }
    useEffect(()=>{
        getAddress();
    },[])
    return address;
};

export default useAddress;
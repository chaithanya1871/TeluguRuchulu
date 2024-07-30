import { useEffect, useState } from "react";

export interface LocationProps {
  loaded:boolean,
  coordinates:{
    latitude: number;
    longitude: number;
  }
  
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationProps>({
    loaded:false,
    coordinates:{
    latitude: 0,
    longitude: 0
  }});
  const [error, setError] = useState<string | null>(null);

  function showLocation(position:any){
    const {latitude, longitude} = position.coords;
    setLocation({loaded:true,
      coordinates:{
      latitude: latitude,
      longitude: longitude
    }});
  };
  async function ipLookUp() {
    const resp = await fetch("https://ipapi.co/json");
    const data = await resp.json();
    setLocation({loaded:true,
      coordinates:{
      latitude: data.latitude,
      longitude: data.longitude
    }});

  }

  useEffect(() => {
    ipLookUp();
  }, []);

  return location ;
}

import { useEffect, useState } from "react";

export interface LocationProps {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationProps>({
    latitude: 0,
    longitude: 0
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log()
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude: latitude,
            longitude: longitude
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, []);

  return location ;
}

import { createContext } from "react";

const LocationContext = createContext({
    latitude:0,
    longitude:0
});
LocationContext.displayName="locationContext";

export default LocationContext;
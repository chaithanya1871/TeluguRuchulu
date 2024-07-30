import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import LocationContext from "./context/useLocationContext";
import { useGeoLocation } from "./hooks/useGeoLocation";


function App() {
  const {loaded, coordinates} = useGeoLocation();

  if(!loaded){
    return <div>Loading.....</div>
  }
  return (
    <>
      <LocationContext.Provider value={{latitude:coordinates.latitude,longitude:coordinates.longitude}}>
          <ToastContainer autoClose={1500} style={{ fontSize: "0.7rem" }} />
          <RouterProvider router={routes}/>
      </LocationContext.Provider>
      
    </>
   
  )
}

export default App

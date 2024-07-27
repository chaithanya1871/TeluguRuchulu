import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer autoClose={1500} style={{ fontSize: "0.7rem" }} />
      <RouterProvider router={routes}/>
    
    </>
   
  )
}

export default App

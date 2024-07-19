import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <div className="m-auto w-[80vw] min-w-[80vw] min-h-screen flex flex-col box-border border">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;
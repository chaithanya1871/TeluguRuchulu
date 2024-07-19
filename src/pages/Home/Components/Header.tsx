import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
    return (
        <div className="flex justify-between items-center  shadow-lg z-10 w-full bg-slate-50 p-4">
            <div className=" flex items-center">
                <Link to='/' className=" font-bold text-black text-2xl"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link>
            </div>
            <div className=" flex justify-between items-center">
                <ul className="flex list-none pr-14 font-semibold text-gray-700 ">
                    <li className="p-3 mr-10 hover:text-black"><Link to='/'>Home</Link></li>
                    <li className="p-3 mr-10 hover:text-black"> <Link to='about'>About</Link></li>
                    <li className="p-3 mr-10 hover:text-black"><Link to='contact-us'>ContactUs</Link></li>
                    <li className="p-3 mr-10 hover:text-black"><Link to='cart'><BsCart4 className="inline text-2xl text-orange-400"/></Link></li>
                    <li className="p-3 mr-10 hover:text-black"><Link to='/sign-in'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
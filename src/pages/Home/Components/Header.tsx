import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useOnline } from "../../../hooks/useOnline";
import { useSelector } from "react-redux";
import useAddress from "../../../hooks/useAddress";


const Header = () => {
    const isOnline = useOnline();
    const address = useAddress();
    const cartCount = useSelector((state:any) => state.cart.totalItemCount);
    return (
        <div className="flex justify-between items-center  shadow-lg z-10 w-full bg-slate-50 p-4">
            <div className=" flex items-center">
                <Link to='/' className=" font-bold text-black text-2xl"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link>
                <p className="font-poppins text-xs text-orange-500 ml-4 whitespace-nowrap overflow-hidden overflow-ellipsis">{address?.length > 50
            ? `${address?.slice(0, 50)}...`
            : address}</p>
            </div>
            <div className=" flex justify-between items-center">
                <ul className="flex list-none pr-14 font-semibold text-gray-700 ">
                    <li className="p-3 mr-10 hover:text-black"><Link to='/'>Home</Link></li>
                    <li className="p-3 mr-10 hover:text-black"> <Link to='about'>About</Link></li>
                    <li className="p-3 mr-10 hover:text-black"><Link to='contact-us'>ContactUs</Link></li>
                    <li className="p-3 mr-10 hover:text-black"><Link to='cart'><BsCart4 className="inline text-2xl text-orange-400"/>({cartCount})</Link></li>
                    <div className=" flex justify-center items-center">
                        <li className={`p-3 hover:text-black`}>
                            <Link to='/sign-in'>Login</Link>
                        </li>
                        {isOnline ? (
                            <span className="text-green-600 text-sm">●</span>
                            ) : (
                            <span className="text-red-500 text-sm">●</span>
                            )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
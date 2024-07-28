import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemCard from './Components/ItemCard';

const Cart = () => {
    const items = useSelector((state:any) => state.cart.items);

    const navigate = useNavigate();
    const handleRestaurants = ()=>{
        navigate('/')
    }

    return (
        <div className=' flex justify-center items-center'>
            {items.length > 0 ? (
                <div className=' flex flex-col justify-center items-center h-[100vh] w-[700px]'>
                    <h3 className=' text-center font-bold text-2xl mt-10'>Items in your cart:</h3>
                    <div className=' flex flex-col w-full justify-center items-center'>
                        {items.map((item:any, index:any) => (
                            <ItemCard card={item} index={index}/>
                        ))}
                    </div>
                </div>
            ) : (
                <div className=' flex justify-center items-center h-[70vh] w-[500px]'>
                    <div>
                        <h3 className=' mb-3'>Your cart is empty</h3>
                        <button className=' bg-black text-white p-2 rounded-sm' onClick={handleRestaurants}>See restaurants near you</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

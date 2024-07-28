import { IoIosAdd } from "react-icons/io";
import { REACT_MEDIA_ASSETS_BASE_URL } from "../../../utils/constants";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../../redux/cartslice";

const ItemCard = (card:any) => {
    const disptach = useDispatch();
    const handleaddItem = (item:any)=>{
        disptach(addItems(item))
    }
    return (
        <div className=' flex justify-between items-center border-b-2 pb-2 mb-2 w-full'>
            <div>
              <h3 className=' font-bold text-lg mb-2'>{card.card.name}</h3>
              <h5>{card.card.description}</h5>
              <div className=' flex items-center gap-1'>
                <p>{(card.card.price)/100}</p>
                <FaRupeeSign />
              </div>
             
          </div>
          <div>
            <img src={REACT_MEDIA_ASSETS_BASE_URL+card?.card.imageId} className=' w-[100px] h-[100px]'/>
            <div className=' flex justify-center items-center gap-1  bg-[#d97919] mt-2 rounded-md font-bold' onClick={()=>{
              handleaddItem(card.card)
            }}>
              <button className=' '>Add</button>
              <IoIosAdd  size={20}/>
            </div>
          </div>
        
        </div>
    );
};

export default ItemCard;
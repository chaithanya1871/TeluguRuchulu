import { IoIosAdd } from "react-icons/io";
import { REACT_MEDIA_ASSETS_BASE_URL } from "../../../utils/constants";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../../../redux/cartslice";
import { GrFormSubtract } from "react-icons/gr"

const ItemCard = (card:any) => {
    const disptach = useDispatch();
    const handleaddItem = (item:any)=>{
        disptach(addItems(item))
    }
    const handleRemoveItem = (item:any)=>{
      console.log("called");
      console.log(item)
      disptach(removeItems(item));
    }
    console.log("card", card.card.quantity);
    return (
        <div className=' flex justify-between items-center border-b-2 pb-2 mb-2 w-full'>
            <div className=" w-[70%]">
              <h3 className=' font-bold text-lg mb-2'>{card.card.name}</h3>
              <h5>{card.card.description}</h5>
              <div className=' flex items-center gap-1 mt-3 font-bold text-lg'>
                <p>{card.card.price? (card.price)/100 : (card.card.defaultPrice)/100}</p>
                <FaRupeeSign />
              </div>
             
          </div>
          <div>
            <img src={REACT_MEDIA_ASSETS_BASE_URL+card?.card.imageId} className=' w-[100px] h-[100px]'/>
            <div className='flex justify-center items-center gap-3  bg-[#d97919] mt-2 rounded-md font-bold'>
                <GrFormSubtract size={20}  onClick={()=>{handleRemoveItem(card.card)}} className=" cursor-pointer"/>
                {card.card.quantity}
                <IoIosAdd  size={20} onClick={()=>handleaddItem(card.card)} className=" cursor-pointer"/> 
              </div>
          </div>
        
        </div>
    );
};

export default ItemCard;
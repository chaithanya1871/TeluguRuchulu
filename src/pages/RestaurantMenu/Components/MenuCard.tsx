import { useState } from 'react'
import { REACT_MEDIA_ASSETS_BASE_URL } from '../../../utils/constants'
import { IoIosAdd } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItems, removeItems} from '../../../redux/cartslice';
import { GrFormSubtract } from "react-icons/gr";
type Props = {
    card:any
}

export default function MenuCard({card}: Props) {
  const disptach = useDispatch();
  const handleaddItem = (item:any)=>{
    disptach(addItems(item))
  }
  const handleRemoveItem = (item:any)=>{
    disptach(removeItems(item));
  }
  const [itemCount, setItemCount] = useState<number>(0);
  return (
    <div className=' flex justify-between items-center border-b-2 pb-2 mb-2 w-full'>
          <div className=' w-[80%]'>
              <h3 className=' font-bold text-lg mb-2'>{card.name}</h3>
              <h5>{card.description}</h5>
              <div className=' flex items-center gap-1'>
                <p>{card.price? (card.price)/100 : (card.defaultPrice)/100}</p>
                <FaRupeeSign />
              </div>
             
          </div>
          <div>
            <img src={REACT_MEDIA_ASSETS_BASE_URL+card?.imageId} className=' w-[100px] h-[100px] rounded-md'/>
            {itemCount?
            <div>
              <div className='flex justify-center items-center gap-3  bg-[#d97919] mt-2 rounded-md font-bold'>
                <GrFormSubtract size={20} onClick={()=>{
                  setItemCount(itemCount-1);
                  handleRemoveItem(card)
                }}className=' cursor-pointer'/>
                {itemCount}
                <IoIosAdd  size={20} onClick={()=>{setItemCount(itemCount+1); handleaddItem(card);}} className=' cursor-pointer'/>
              </div>
            </div>:
                <div className=' flex justify-center items-center gap-1  bg-[#d97919] mt-2 rounded-md font-bold cursor-pointer' onClick={()=>{
                handleaddItem(card);
                setItemCount(itemCount+1);
              }}>
                <button>Add</button>
                <IoIosAdd  size={20}/>
            </div>
            }
            
          </div>
        
       
    </div>
  )
}
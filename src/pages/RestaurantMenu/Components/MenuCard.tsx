import React from 'react'
import { REACT_MEDIA_ASSETS_BASE_URL } from '../../../utils/constants'
import { IoIosAdd } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";



type Props = {
    card:any
}

export default function MenuCard({card}: Props) {
  return (
    <div className=' flex justify-between items-center border-b-2 pb-2 mb-2 w-full'>
          <div>
              <h3 className=' font-bold text-lg mb-2'>{card.name}</h3>
              <h5>{card.description}</h5>
              <div className=' flex items-center gap-1'>
                <p>{(card.price)/100}</p>
                <FaRupeeSign />
              </div>
             
          </div>
          <div>
            <img src={REACT_MEDIA_ASSETS_BASE_URL+card?.imageId} className=' w-[100px] h-[100px]'/>
            <div className=' flex justify-center items-center gap-1  bg-[#d97919] mt-2 rounded-md font-bold'>
              <button className=' '>Add</button>
              <IoIosAdd  size={20}/>
            </div>
          </div>
        
       
    </div>
  )
}
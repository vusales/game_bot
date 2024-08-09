import React from 'react'; 

type Props = {
    imageSourse:  string ; 
    time : string ; 
    itemTitle: string ; 
}

const DailyItemsComponent = ({
    imageSourse ,
    itemTitle , 
    time , 
}: Props) => {
  return (
    <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative flex justify-center items-center flex-col">
        <div className="dot"></div>
        <img src={imageSourse} alt={itemTitle} className="mx-auto w-8 h-8" />
        <p className="text-[10px] text-center text-white mt-1">{itemTitle}</p>
        <p className="text-[10px] font-medium text-center text-gray-400 mt-1">{time}</p>
    </div>
  )
}

export default DailyItemsComponent;
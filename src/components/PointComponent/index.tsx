import React from 'react'

type Props = {
    imageSource : string ; 
    point:string ;  
}

const PointComponent = ({
    imageSource , 
    point , 
}: Props) => {
  return (
    <div className="px-4 mt-2 flex justify-center">
        <div className="px-4 py-1 flex items-center space-x-2">
        <img src={imageSource} alt="Dollar Coin" className="w-10 h-10" />
        <p className="text-4xl text-white">{point}</p>
        </div>
    </div>
  
  )
}

export default PointComponent; 
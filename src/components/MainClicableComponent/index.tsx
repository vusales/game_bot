import React from 'react'

type Props = {
    callBack : (e: React.MouseEvent<HTMLDivElement>)=>void ,  
    imageSource:  string ,  
}

const MainClicableComponent = ({
    callBack , 
    imageSource , 

}: Props) => {
  return (
    <div className="px-4 mt-2 flex justify-center">
        <div
        className="w-80 h-80 p-4 rounded-full circle-outer"
        onClick={callBack}
        >
        <div className="w-full h-full rounded-full circle-inner">
            <img src={imageSource} alt="Main Character" className="h-full" />
        </div>
        </div>
    </div>
  )
}

export default MainClicableComponent; 
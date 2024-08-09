import React from 'react'

type Props = {
    levelName?:  string , 
    levelIndex: number , 
    totalLength: number , 
    finalProgress: number , 

}

const LegendaryComponent = ({
    levelName , 
    levelIndex , 
    totalLength , 
    finalProgress , 

}: Props) => {
  return (
         
    <div className="flex items-center w-1/3">
        <div className="w-full">
        <div className="flex justify-between">
            <p className="text-sm">{levelName}</p>
            <p className="text-sm">{levelIndex} <span className="text-[#95908a]">/ {totalLength}</span></p>
        </div>
        <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
            <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
            <div className="progress-gradient h-2 rounded-full" style={{ width: `${finalProgress}%` }}></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LegendaryComponent ; 
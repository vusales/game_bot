import React from 'react';
import { binanceLogo, alienCoin } from '../../images';
import Mine from '../../icons/Mine';
import Friends from '../../icons/Friends';
import Coins from '../../icons/Coins';


type Props = {}

const BottomFixedComponent = ({}: Props) => {
  return (
    <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          <img src={binanceLogo} alt="Exchange" className="w-4 h-4 mx-auto" />
          <p className="mt-1">Exchange</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-4 h-4 mx-auto" />
          <p className="mt-1">Mine</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-4 h-4 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-4 h-4 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <img src={alienCoin} alt="Airdrop" className="w-4 h-4 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </div>
      </div>
  )
}

export default BottomFixedComponent
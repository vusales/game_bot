import React from 'react'; 
import Hamster from '../../icons/Hamster';

type Props = {}

const UserInfoComponent = (props: Props) => {
  return (
    <div className="flex items-center space-x-2 pt-4">
        <div className="p-1 rounded-lg bg-[#1d2025]">
            <Hamster size={24} className="text-[#d4d4d4]" />
        </div>
        <div>
            <p className="text-sm">Nikandr (CEO)</p>
        </div>
    </div>
  )
}

export default UserInfoComponent
import React, { 
  useState, 
  useEffect 
} from 'react';
import './App.css';
import {  
  dollarCoin,  
  mainCharacter, 
} from './images';
import { 
  UserInfoComponent , 
  LegendaryComponent ,
  ProfitShowerComponent , 
  DailyContainerComponent, 
  BottomFixedComponent, 
  PointComponent , 
  MainClickableComponent , 
} from './components';

const profitPerHour = 126420;

const App: React.FC = () => {

  const [points, setPoints] = useState(22749365);

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black flex justify-center h-screen">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl ">
        
        <div className="px-4 z-10">
          <UserInfoComponent/>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <LegendaryComponent points={points} />
            <ProfitShowerComponent
              profitPerHour={profitPerHour}
            />
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <DailyContainerComponent/>
            <PointComponent
              imageSource={dollarCoin} 
              point={points.toLocaleString()}
            />
            <MainClickableComponent
             setPoints={setPoints}
             imageSource ={mainCharacter}
            />
          </div>
        </div>

      </div>

      {/* Bottom fixed div */}
      {/* <BottomFixedComponent /> */}

    </div>
  );
};

export default App;

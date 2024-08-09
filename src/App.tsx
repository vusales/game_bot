import React, { 
  useState, 
  useEffect 
} from 'react';
import './App.css';
import {  
  dollarCoin,  
  mainCharacter, 
} from './images';
import { ClickProps } from './utils/types';
import { 
  UserInfoComponent , 
  LegendaryComponent ,
  ProfitShowerComponent , 
  DailyContainerComponent, 
  BottomFixedComponent, 
  PointComponent , 
  MainClickableComponent , 
} from './components';

const levelNames = [
  "Bronze",    // From 0 to 4999 coins
  "Silver",    // From 5000 coins to 24,999 coins
  "Gold",      // From 25,000 coins to 99,999 coins
  "Platinum",  // From 100,000 coins to 999,999 coins
  "Diamond",   // From 1,000,000 coins to 2,000,000 coins
  "Epic",      // From 2,000,000 coins to 10,000,000 coins
  "Legendary", // From 10,000,000 coins to 50,000,000 coins
  "Master",    // From 50,000,000 coins to 100,000,000 coins
  "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
  "Lord"       // From 1,000,000,000 coins to ∞
];

const levelMinPoints = [
  0,        // Bronze
  5000,     // Silver
  25000,    // Gold
  100000,   // Platinum
  1000000,  // Diamond
  2000000,  // Epic
  10000000, // Legendary
  50000000, // Master
  100000000,// GrandMaster
  1000000000// Lord
];

const pointsToAdd = 11;
const profitPerHour = 126420;

const App: React.FC = () => {

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<ClickProps[]>([]);
 

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex((prevLevelIndex)=>prevLevelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex((prevLevelIndex)=>prevLevelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);


  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints((prevPoints)=>prevPoints + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };
 
  return (
    <div className="bg-black flex justify-center h-screen">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl ">

        <div className="px-4 z-10">
          <UserInfoComponent/>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <LegendaryComponent
              levelName={levelNames[levelIndex]}
              levelIndex ={levelIndex + 1}
              totalLength={levelNames.length}
              finalProgress={calculateProgress()}
            />
            <ProfitShowerComponent
            profitPerHour={formatProfitPerHour(profitPerHour)}
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
             callBack={handleCardClick}
             imageSource ={mainCharacter}
            />
          </div>
        </div>

      </div>

      {/* Bottom fixed div */}
      <BottomFixedComponent />
    

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}

    </div>
  );
};

export default App;

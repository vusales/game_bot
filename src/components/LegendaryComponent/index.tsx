import React , {
    useEffect , 
    useState , 
} from 'react'; 
import { 
    levelNames , 
    levelMinPoints , 
} from '../../utils/constants';

type Props = {
    points: number ,
}

const LegendaryComponent = ({
    
    points ,  

}: Props) => {

    const [levelIndex, setLevelIndex] = useState(6);

    useEffect(() => {
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
          setLevelIndex((prevLevelIndex)=>prevLevelIndex + 1);
        } else if (points < currentLevelMin && levelIndex > 0) {
          setLevelIndex((prevLevelIndex)=>prevLevelIndex - 1);
        }
    }, [ points, levelIndex ]);


    const calculateProgress = () => {
        if (levelIndex >= levelNames.length - 1) {
            return 100;
        }
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(progress, 100);
    };


  return (      
    <div className="flex items-center w-1/3">
        <div className="w-full">
        <div className="flex justify-between">
            <p className="text-sm">{levelNames[levelIndex]}</p>
            <p className="text-sm">{levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span></p>
        </div>
        <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
            <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
            <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LegendaryComponent; 
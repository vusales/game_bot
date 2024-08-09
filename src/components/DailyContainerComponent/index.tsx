import React, {
  useEffect , 
  useState , 
} from 'react';
import {  dailyCipher, dailyCombo, dailyReward,  } from '../../images';
import DailyItemsComponent from '../DailyItemsComponent';


type Props = {}

const DailyContainerComponent = ({}: Props) => {
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  useEffect(() => {
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const updateCountdowns = () => {
    setDailyRewardTimeLeft(calculateTimeLeft(0));
    setDailyCipherTimeLeft(calculateTimeLeft(19));
    setDailyComboTimeLeft(calculateTimeLeft(12));
  };

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}`;
  };


  return (
    <div className="px-4 mt-2 flex justify-between gap-2">
      <DailyItemsComponent
      imageSourse = {dailyReward}
      itemTitle ="Daily reward" 
      time={dailyRewardTimeLeft}
      />

      <DailyItemsComponent
      imageSourse = {dailyCipher}
      itemTitle ="Daily Cipher" 
      time={dailyCipherTimeLeft}
      />

      <DailyItemsComponent
      imageSourse = {dailyCombo}
      itemTitle ="Daily Combo" 
      time={dailyComboTimeLeft}
      />
    </div>
  )
}

export default DailyContainerComponent;
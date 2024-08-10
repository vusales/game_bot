import React, { useState } from 'react';
import { ClickProps } from '../../utils/types';

type ChildComponentProps = {
  setPoints: React.Dispatch<React.SetStateAction<number>>; 
  imageSource: string;
};

const pointsToAdd = 11;


const MainClickableComponent: React.FC<ChildComponentProps> = ({
  setPoints,
  imageSource,
}) => {
  const [clicks, setClicks] = useState<ClickProps[]>([]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints((prevPoints) => prevPoints + pointsToAdd);

    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };


  return (
    <>
      <div className="px-4 mt-2 flex justify-center">
        <div
          className="w-80 h-80 p-4 rounded-full circle-outer select-none"
          onClick={handleCardClick}
        >
          <div className="w-full h-full rounded-full circle-inner">
            <img src={imageSource} alt="Main Character" className="h-full" />
          </div>
        </div>
      </div>

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            // top: `${click.y - 42}px`,
            // left: `${click.x - 28}px`,
            top: `${click.y - 120}px`,
            left: `${click.x - 10}px`,
            animation: `float 1s ease-out`
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}

    </>
  );
};

export default MainClickableComponent;

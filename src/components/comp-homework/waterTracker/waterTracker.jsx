// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './waterTracker.css';
import { MdLocalDrink} from 'react-icons/md'; // Usando FontAwesome para ícones

const WaterTracker = () => {
  const [waterDrank, setWaterDrank] = useState(0);
  const [cupsState, setCupsState] = useState(Array(10).fill(false));

  const toggleCup = (index) => {
    const newCupsState = [...cupsState];
    newCupsState[index] = !newCupsState[index];

    if (newCupsState[index]) {
      setWaterDrank(waterDrank + 200); // Adiciona 200ml de água
    } else {
      setWaterDrank(waterDrank - 200); // Remove 200ml de água
    }

    setCupsState(newCupsState);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="textContainer">
          <p className="text">Água</p>
          <p className="text">{waterDrank} ml</p>
        </div>
        <div className="cupsGrid">
          {cupsState.map((filled, index) => (
            <div
              key={index}
              className={`cup ${filled ? 'filled' : ''}`}
              onClick={() => toggleCup(index)}
            >
              <MdLocalDrink size={100} color={filled ? '#72BBFF' : 'gray'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
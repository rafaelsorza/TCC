// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [nutrients, setNutrients] = useState({ carbs: 0, proteins: 0, fats: 0 });
  // eslint-disable-next-line no-unused-vars
  const [totalCalories, setTotalCalories] = useState(0);
  const [goal] = useState({ carbs: 300, proteins: 150, fats: 70 }); // Metas diárias em gramas
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Carregar alimentos previamente adicionados
    const initialFoods = [
      { name: 'Banana', carbs: 27, proteins: 1, fats: 0.3, calories: 105 },
      { name: 'Chicken Breast', carbs: 0, proteins: 31, fats: 3.6, calories: 165 },
    ];
    setFoodItems(initialFoods);
    calculateNutrients(initialFoods);
  }, []);

  const calculateNutrients = (foods) => {
    const totalNutrients = foods.reduce(
      (acc, food) => {
        acc.carbs += food.carbs;
        acc.proteins += food.proteins;
        acc.fats += food.fats;
        return acc;
      },
      { carbs: 0, proteins: 0, fats: 0 }
    );
    setNutrients(totalNutrients);
    setTotalCalories(foods.reduce((acc, food) => acc + food.calories, 0));
  };

  const handleAddFood = (food) => {
    const updatedFoodItems = [...foodItems, food];
    setFoodItems(updatedFoodItems);
    calculateNutrients(updatedFoodItems);
  };

  const data = {
    labels: ['Carboidratos', 'Proteínas', 'Gorduras'],
    datasets: [
      {
        data: [nutrients.carbs, nutrients.proteins, nutrients.fats],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="dashboard">
     
      <Pie data={data} />
      <div className="progress-bars">
        <div className="progress-bar">
          <label>Carboidratos: {nutrients.carbs}g / {goal.carbs}g</label>
          <progress value={nutrients.carbs} max={goal.carbs}></progress>
        </div>
        <div className="progress-bar">
          <label>Proteínas: {nutrients.proteins}g / {goal.proteins}g</label>
          <progress value={nutrients.proteins} max={goal.proteins}></progress>
        </div>
        <div className="progress-bar">
          <label>Gorduras: {nutrients.fats}g / {goal.fats}g</label>
          <progress value={nutrients.fats} max={goal.fats}></progress>
        </div>
      </div>
      <button onClick={() => navigate('/add-food', { state: { handleAddFood } })}>Adicionar Alimento</button>
      <ul>
        {foodItems.map((food, index) => (
          <li key={index}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


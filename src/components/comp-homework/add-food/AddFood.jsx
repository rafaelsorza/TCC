// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddFood.css';

const AddFood = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/natural/nutrients',
        {
          query: search,
        },
        {
          headers: {
            'x-app-id': '4a50e309',
            'x-app-key': '47a755109865d81cffd4210406bd6c20',
          },
        }
      );
      setFoods(response.data.foods);
    } catch (error) {
      console.error('Erro ao buscar alimentos:', error);
    }
  };

  const handleAddFood = (food) => {
    const newFood = {
      name: food.food_name,
      carbs: food.nf_total_carbohydrate,
      proteins: food.nf_protein,
      fats: food.nf_total_fat,
      calories: food.nf_calories,
    };
    navigate('/', { state: { newFood } });
  };

  return (
    <div className="addFoodContainer">
      <h1>Adicionar Alimento</h1>
      <input
        type="text"
        placeholder="Pesquisar alimentos..."
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul className="foodList">
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleAddFood(food)}>
            {food.food_name} - {food.nf_calories} calorias
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddFood;


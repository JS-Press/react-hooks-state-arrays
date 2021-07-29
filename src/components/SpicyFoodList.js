import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {

  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All"); 

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  }); 

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // console.log(newFood);
    const newFoodList = [...foods, newFood]
    setFoods(newFoodList)
  }
  
  function clickFood(foo){
    const aNewList = foods.map((food) => {
      if (food.id === foo){
        return{
          ...food, heatLevel : food.heatLevel + 1 }
      } else {
        return food
      }
      })
      setFoods(aNewList)
    }

    function handleChange(e){
      // console.log(e.target.value)
      setFilterBy(e.target.value)
      // setFoods(spicyFoods)
      // const filteredList = foods.filter( food => food.cuisine === filterBy )
      // setFoods(filteredList)
      // setFoods(foodsToDisplay)
    }
  
  
 const foodList = foodsToDisplay.map((food) => (
 <li key = {food.id} onClick = {() => clickFood(food.id)}>
   {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
   </li>
 ))
 
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <br></br><br></br><br></br>

<select onChange = {handleChange} name="filter">
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select> 
    </div>
  );

  }

export default SpicyFoodList;

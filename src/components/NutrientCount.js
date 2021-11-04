import React from "react";

const NutrientCount = ({ foods }) => {
  const calorieCount = foods.reduce(
    (totalCalories, currentFood) =>
      totalCalories + currentFood.calories / currentFood.serving,
    0
  );
  const vitACount = foods.reduce(
    (totalVitA, currentFood) =>
      totalVitA + currentFood.nutrients["Vitamin A"] / currentFood.serving,
    0
  );
  const proteinCount = foods.reduce(
    (totalProtein, currentFood) =>
      totalProtein + currentFood.proteins / currentFood.serving,
    0
  );
  return (
    <div
      style={{ textAlign: "left", padding: "30px", justifyContent: "flex-end" }}
    >
      <div>
        <p>Total Calories Consumed: {Math.round(calorieCount * 1000)} cal</p>
      </div>
      <div>
        <p>Average Calories: 2250 cal </p>
      </div>
      <div>
        <p data-testid='vita-count'>
          Total Vitamin A Consumed: {Math.round(vitACount * 10000)} micrograms
        </p>
      </div>
      <div>
        <p>Average Vitamin A: 800 micrograms </p>
      </div>
      <div>
        <p>Total Protein Consumed: {Math.round(proteinCount / 1000)} g</p>
      </div>
      <div>
        <p>Average Protein: 51 g </p>
      </div>
    </div>
  );
};

export default NutrientCount;

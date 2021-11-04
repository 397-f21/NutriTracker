import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import NutrientCount from "./components/NutrientCount";
import { useData } from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./icon.png";
import InputDetails from "./components/InputDetails";

function App() {
  const [data, loading, error] = useData("/");
  const [foods, setFoods] = useState([]);
  const [calories, setCalories] = useState(0);
  const [vitaminA, setVitaminA] = useState(0);
  const [carbs, setCarbs] = useState(0);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img width="70px" height="70px" src={icon} alt="logo_image" />
        <h1>NutriTracker</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SearchBar data={data} foods={foods} setFoods={setFoods} />
        <FoodList foods={foods} />
        <InputDetails
          setCalories={setCalories}
          setVitaminA={setVitaminA}
          setCarbs={setCarbs}
        />
        <NutrientCount
          foods={foods}
          calories={calories}
          vitaminA={vitaminA}
          carbs={carbs}
        />
      </div>
    </div>
  );
}

export default App;

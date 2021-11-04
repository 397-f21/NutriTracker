import { set } from "@firebase/database";
import React, { useState } from "react";
import "../App.css";

const InputDetails = ({ setCalories, setVitaminA, setCarbs }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);

  const calculateNutrients = () => {
    const activityMultipliers = {
      0: 1.2,
      1: 1.375,
      2: 1.55,
      3: 1.725,
      4: 1.9,
    };
    var BMR = 0;

    if (sex === 0) {
      BMR = 66 + 6.3 * weight + 12.9 * height - 6.8 * age;
      setVitaminA(900);
    } else {
      BMR = 655 + 4.3 * weight + 4.7 * height - 4.7 * age;
      setVitaminA(700);
    }

    const calorieCount = Math.round(BMR * activityMultipliers[activity]);
    setCarbs(calorieCount / 8);
    setCalories(calorieCount);
  };

  return (
    <div style={{ padding: 30 }}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label style={{ marginBottom: 10 }}>
          Height in inches
          <input
            type="number"
            name="height"
            style={{ marginLeft: 10 }}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: 10 }}>
          Weight in pounds
          <input
            type="number"
            name="weight"
            style={{ marginLeft: 10 }}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: 10 }}>
          Age
          <input
            type="number"
            name="age"
            style={{ marginLeft: 10 }}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: 10 }}>
          Sex
          <select
            style={{ marginLeft: 10 }}
            onChange={(e) => setSex(parseInt(e.target.value))}
          >
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </label>
        <label style={{ marginBottom: 10 }}>
          Activity Level
          <select
            style={{ marginLeft: 10 }}
            onChange={(e) => setActivity(parseInt(e.target.value))}
          >
            <option value="0">Sedentary (little or no exercise)</option>
            <option value="1">
              Lightly active (light exercise/sports 1-3 days/week)
            </option>
            <option value="2">
              Moderately active (moderate exercise/sports 3-5 days/week)
            </option>
            <option value="3">
              Very active (hard exercise/sports 6-7 days a week)
            </option>
            <option value="4">
              Extra active (very hard exercise/sports, physical job or 2x
              training)
            </option>
          </select>
        </label>
        <input type="button" value="Submit" onClick={calculateNutrients} />
      </form>
    </div>
  );
};

export default InputDetails;

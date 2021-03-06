import React from 'react';

const FoodList = ({ data, foods, setFoods }) => {
  return (
    <div style={{ padding: "30px" }} data-testid='food-list'>
      <ul>
        {Object.keys(foods).map((foodIndex, index) => (
          <div data-cy='food-list'>
            <p key={index} style={{ marginBottom: 5 }}>
              {data[foodIndex].name}
            </p>
            <input
              type='number'
              name='serving'
              defaultValue={data[foodIndex].serving}
              style={{ marginBottom: 15 }}
              onChange={(e) =>
                setFoods((prevItem) => ({
                  ...prevItem,
                  [foodIndex]: parseInt(e.target.value),
                }))
              }
            />
            <span style={{ marginLeft: -40 }}>g</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;

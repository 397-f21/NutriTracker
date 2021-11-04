import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchBar from './components/SearchBar';
import { unmountComponentAtNode } from 'react-dom';
import NutrientCount from './components/NutrientCount';

describe('vitamin a tests', () => {
  const data = [
    {
      name: 'Beef liver',
      usda_id: '13326',
      fat: 53000,
      calories: 1.91,
      proteins: 291000,
      carbohydrates: 51000,
      serving: 100,
      nutrients: {
        Calcium: 60,
        Iron: 65,
        Potassium: 3520,
        Magnesium: 210,
        Phosphorus: 4970,
        Sodium: 790,
        Zinc: 53,
        Copper: 143,
        Manganese: 4,
        Selenium: 0.36,
        'Vitamin C': 19,
        'Vitamin B12': 0.71,
        'Vitamin B1': 2,
        'Vitamin B2': 34,
        'Vitamin B3': 175,
        'Vitamin B5': 71,
        'Vitamin B6': 10,
        'Vitamin B7': 0.36,
        'Vitamin B9': 2.53,
        Choline: 4260,
        'Vitamin A': 94.42,
        'Vitamin E': 5,
        'Vitamin K': 0.03,
        'Linoleic acid': 6590,
        'α-Linolenic acid': 170,
        Tryptophan: 3680,
        Threonine: 12150,
        Isoleucine: 13520,
        Leucine: 26700,
        Lysine: 22470,
        Methionine: 7590,
        Phenylalanine: 15150,
        Valine: 17610,
        Histidine: 8790,
      },
    },
  ];

  var foods = [];
  const setFoods = (newList) => (foods = newList);

  test('button click to open search bar', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    expect(getByTestId('search-bar'));
  });

  test('beef liver gets added', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    const button2 = getByTestId('select-item');
    userEvent.click(button2);

    expect(foods[0]).toBe(data[0]);
  });

  test('vitamin a count increases after adding beef liver', async () => {
    const { getByTestId } = render(
      <div>
        <SearchBar data={data} foods={foods} setFoods={setFoods} />
        <NutrientCount foods={foods} />
      </div>
    );

    const vitACount = getByTestId('vita-count');

    expect(vitACount.textContent).toContain(
      Math.round(
        (data[0]['nutrients']['Vitamin A'] / data[0]['serving']) * 10000
      ).toString()
    );
  });
});

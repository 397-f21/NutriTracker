import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import InputDetails from '../components/InputDetails';

describe('age arrow changes input', () => {
  var foods = [];
  const setFoods = (newList) => (foods = newList);

  test('button click', async () => {
    const { getByTestId } = render(
      <InputDetails />
    );
    const ageInput = getByTestId('age-input');
    fireEvent.change(ageInput, {target: {value: 20}});

    expect(ageInput.value).toContain('20');
  });
});
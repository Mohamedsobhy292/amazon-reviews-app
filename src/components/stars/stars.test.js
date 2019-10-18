import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Stars from './index';

describe('<Stars Component />', () => {
  test('render selected stars correctly', () => {
    const { getAllByTestId } = render(<Stars rating={3} />);
    expect(getAllByTestId('filled-star').length).toBe(3);
  });

  test('render total stars correctly', () => {
    const { getAllByTestId } = render(<Stars rating={2} />);
    const filledStars = getAllByTestId('filled-star').length;
    const OutlinedStars = getAllByTestId('outlined-star').length;
    expect(OutlinedStars + filledStars).toBe(5);
  });
});

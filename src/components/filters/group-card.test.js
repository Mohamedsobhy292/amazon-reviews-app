import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GroupCard from './group-card';

const mockChangeGroup = jest.fn(val => filters.groupBy === val);

afterEach(cleanup);

const filters = {
  groupBy: 'month',
};

describe('<GroupCard Component />', () => {
  test('render value correctly', () => {
    const { getByTestId } = render(<GroupCard filters={filters} />);
    expect(getByTestId('group-select')).toHaveValue(filters.groupBy);
  });

  test('fire event correctly', () => {
    const { getByTestId } = render(
      <GroupCard filters={filters} changeReviewsGrouping={mockChangeGroup} />
    );
    fireEvent.change(getByTestId('group-select'), {
      target: {
        value: 'day',
      },
    });
    expect(getByTestId('group-select')).toHaveValue(filters.groupBy);
  });
});

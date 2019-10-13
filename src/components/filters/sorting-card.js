import React from 'react';
import { FiltersTitle, CustomSelect, FilterCard } from './filters-Styles';

const SortingCard = ({ changeReviewsSorting, filters }) => {
  return (
    <FilterCard>
      <FiltersTitle>Sort By</FiltersTitle>
      <CustomSelect
        value={filters.sorting}
        onChange={e => changeReviewsSorting(e.target.value)}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </CustomSelect>
    </FilterCard>
  );
};

export default SortingCard;

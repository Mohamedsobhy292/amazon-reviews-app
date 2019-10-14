import React from 'react';
import { FiltersTitle, CustomSelect, FilterCard } from './filters-Styles';

const GroupCard = ({ filters, changeReviewsGrouping }) => {
  return (
    <FilterCard>
      <FiltersTitle>Group By</FiltersTitle>
      <CustomSelect
        value={filters.groupBy}
        onChange={e => changeReviewsGrouping(e.target.value)}
      >
        <option value="month">By Month</option>
        <option value="day">By Day</option>
      </CustomSelect>
    </FilterCard>
  );
};

export default GroupCard;

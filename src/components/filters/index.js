import React from 'react';
import styled from 'styled-components';
import { changeReviewsFilter, changeReviewsSorting } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const FiltersWrapper = styled.div`
  flex-basis: 30%;
`;

const FilterCard = styled.div`
  background: #fff;
  margin-right: 30px;
  padding: 20px 15px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.17);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 12px;
  align-self: flex-start;
  margin-bottom: 15px;
`;

const FiltersTitle = styled.h3`
  margin-bottom: 12px;
`;

const CustomSelect = styled.select`
  padding: 4px;
  background: none;
  option: {
    padding: 4px;
  }
`;

const FiltersListItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 6px;
  vertical-align: middle;
`;

const InputLabel = styled.label`
  cursor: pointer;
`;

const number = 5;
const starsArr = Array(number)
  .fill(0)
  .map((star, index) => index + 1);

const Filters = ({ ratings, filters }) => {
  const filterValue = useSelector(state => state.filters.stars);
  const dispatch = useDispatch();
  return (
    <FiltersWrapper>
      <FilterCard>
        <FiltersTitle>Filter By</FiltersTitle>
        <ul>
          {starsArr
            .filter(star => ratings.includes(star))
            .map(star => {
              const checked = filterValue === String(star);
              return (
                <FiltersListItem key={star}>
                  <InputLabel htmlFor={`star-${star}`}>
                    <RadioInput
                      onChange={e =>
                        dispatch(changeReviewsFilter(e.target.value))
                      }
                      value={star}
                      type="radio"
                      id={`star-${star}`}
                      name="stars-filter"
                      checked={checked}
                    />
                    <span>{star} stars</span>
                  </InputLabel>
                </FiltersListItem>
              );
            })}
        </ul>
      </FilterCard>

      <FilterCard>
        <FiltersTitle>Sort By</FiltersTitle>
        <CustomSelect
          value={filters.sorting}
          onChange={e => dispatch(changeReviewsSorting(e.target.value))}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </CustomSelect>
      </FilterCard>
    </FiltersWrapper>
  );
};

export default Filters;

import styled from 'styled-components';

export const FilterCard = styled.div`
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

export const FiltersTitle = styled.h3`
  margin-bottom: 12px;
`;

export const FiltersListItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin-right: 6px;
  vertical-align: middle;
`;

export const InputLabel = styled.label`
  cursor: pointer;
`;

export const CustomSelect = styled.select`
  padding: 4px;
  background: none;
  option: {
    padding: 4px;
  }
`;

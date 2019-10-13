import React from 'react';
import { ReactComponent as StarOut } from './star.svg';
import { ReactComponent as StarFilled } from './filled-star.svg';
import Styled from 'styled-components';

const StarsWrapper = Styled.div`
  margin-bottom: 4px;
`;

const number = 5;
const starsArr = Array(number)
  .fill(0)
  .map((star, index) => index + 1);

const Stars = ({ rating }) => {
  return (
    <StarsWrapper>
      {starsArr.map(star => {
        if (rating >= star) {
          return <StarFilled width="12" key={star} />;
        }
        return <StarOut width="12" key={star} />;
      })}
    </StarsWrapper>
  );
};

export default Stars;

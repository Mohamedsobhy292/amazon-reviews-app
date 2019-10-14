import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  flex-basis: 70%;
`;

export const Review = styled.li`
  display: flex;
  background: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.17);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 12px;
`;

export const ReviewTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  display: block;
`;

export const GroupTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  display: block;
`;

export const ReviewDescription = styled.p`
  margin-bottom: 10px;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 6px;
  border-radius: 50%;
`;

export const UserImageWrapper = styled.div`
  margin-right: 15px;
`;

export const ReviewDate = styled.span`
  color: #bfbfbf;
`;

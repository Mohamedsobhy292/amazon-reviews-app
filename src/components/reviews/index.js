import React from 'react';
import styled from 'styled-components';
import Stars from '../stars';

const ReviewsWrapper = styled.div`
  flex-basis: 70%;
`;

const Review = styled.li`
  display: flex;
  background: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.17);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 12px;
`;

const ReviewTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  display: block;
`;

const ReviewDescription = styled.p`
  margin-bottom: 10px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 6px;
  border-radius: 50%;
`;

const UserImageWrapper = styled.div`
  margin-right: 30px;
`;

const ReviewDate = styled.span`
  color: #bfbfbf;
`;

const ReviewContenWrapper = styled.div``;

const Reviews = ({ reviews }) => {
  const dateRenderer = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };
  return (
    <ReviewsWrapper>
      <ul>
        {reviews.items.reviews.map(review => {
          return (
            <Review key={review.reviewId}>
              <UserImageWrapper>
                <UserImg
                  src="https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg"
                  alt="user image"
                />
                <ReviewDate>{dateRenderer(review.reviewCreated)}</ReviewDate>
              </UserImageWrapper>
              <ReviewContenWrapper>
                <Stars rating={review.stars} />
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewDescription>{review.content}</ReviewDescription>
              </ReviewContenWrapper>
            </Review>
          );
        })}
      </ul>
    </ReviewsWrapper>
  );
};

export default Reviews;

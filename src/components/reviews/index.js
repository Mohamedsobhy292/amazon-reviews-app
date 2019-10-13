import React from 'react';
import Stars from '../stars';
import {
  ReviewsWrapper,
  Review,
  UserImageWrapper,
  UserImg,
  ReviewDate,
  ReviewTitle,
  ReviewDescription,
} from './reviews-styles';

const Reviews = ({ reviews, filters }) => {
  const dateRenderer = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <ReviewsWrapper>
      <ul>
        {reviews
          .filter(review => String(review.stars) === filters.stars)
          .map(review => {
            return (
              <Review key={review.reviewId}>
                <UserImageWrapper>
                  <UserImg
                    src="https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg"
                    alt="user image"
                  />
                  <ReviewDate>{dateRenderer(review.reviewCreated)}</ReviewDate>
                </UserImageWrapper>
                <div>
                  <Stars rating={review.stars} />
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <ReviewDescription>{review.content}</ReviewDescription>
                </div>
              </Review>
            );
          })}
      </ul>
    </ReviewsWrapper>
  );
};

export default Reviews;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Stars from '../stars';
import {
  ReviewsWrapper,
  Review,
  UserImageWrapper,
  UserImg,
  ReviewDate,
  ReviewTitle,
  GroupTitle,
  Loader,
  ReviewDescription,
} from './reviews-styles';
import { getGroupedReviews, getAllRatings } from '../../selectors';
import { fetchReviews } from '../../actions';

const Reviews = ({ reviewsGrouped, reviews, fetchReviews }) => {
  // Effect to handle scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // effect for fetching data
  useEffect(() => {
    fetchReviews(reviews.currentPage);
  }, []);

  const handleScroll = () => {
    const onTheEndofPage =
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight;
    if (onTheEndofPage || reviews.isLoading || !reviews.data.hasMore) return;
    fetchReviews(reviews.currentPage);
  };
  const dateRenderer = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <ReviewsWrapper>
      <ul>
        {reviewsGrouped.map((reviewGroup, index) => {
          return (
            <div key={index}>
              <GroupTitle>{reviewGroup.groupTitle}</GroupTitle>
              {reviewGroup.reviews.map(review => {
                return (
                  <Review key={review.reviewId}>
                    <UserImageWrapper>
                      <UserImg
                        src="https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg"
                        alt="user image"
                      />
                      <ReviewDate>
                        {dateRenderer(review.reviewCreated)}
                      </ReviewDate>
                    </UserImageWrapper>
                    <div>
                      <Stars rating={review.stars} />
                      <ReviewTitle>{review.title}</ReviewTitle>
                      <ReviewDescription>{review.content}</ReviewDescription>
                    </div>
                  </Review>
                );
              })}
            </div>
          );
        })}
      </ul>
      {reviews.isLoading && <Loader color="#546E7A" type="bars" />}
    </ReviewsWrapper>
  );
};

const mapStateToProps = state => ({
  reviewsGrouped: getGroupedReviews(state),
  filters: state.filters,
  ratings: getAllRatings(state),
  reviews: state.reviews,
});

const mapDispatchToProps = {
  fetchReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);

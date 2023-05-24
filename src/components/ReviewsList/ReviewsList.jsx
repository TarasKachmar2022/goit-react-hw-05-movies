import PropTypes from 'prop-types';
import ReviewsCard from 'components/ReviewCard/ReviewsCard';

const ReviewsList = ({ reviews }) => {
  const review = reviews.results;
  if (!review) return;

  console.log(review);
  return (
    <>
      {review.length > 0 ? (
        <>
          <ul>
            {review &&
              review.map(item => <ReviewsCard key={item.id} item={item} />)}
          </ul>
        </>
      ) : (
        <p>We don't have reviews for this movie </p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.shape({
    review: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        item: PropTypes.object.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default ReviewsList;

import ReviewsCard from 'components/ReviewsCard/ReviewsCard';

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
        <p>We don't have cast for this movie </p>
      )}
    </>
  );
};

export default ReviewsList;

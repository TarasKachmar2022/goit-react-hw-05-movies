import PropTypes from 'prop-types';

const ReviewsCard = ({ item }) => {
  const { author, content } = item;

  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewsCard.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsCard;

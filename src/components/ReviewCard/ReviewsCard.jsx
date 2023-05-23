const ReviewsCard = ({ item }) => {
  const { author, content } = item;
  //   const location = useLocation();

  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsCard;

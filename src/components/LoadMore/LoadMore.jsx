import PropTypes from 'prop-types';

const LoadMoreBtn = ({ addPage }) => {
  return (
    <div>
      <button type="button" onClick={addPage}>
        Load More
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = { addPage: PropTypes.func.isRequired };

export default LoadMoreBtn;

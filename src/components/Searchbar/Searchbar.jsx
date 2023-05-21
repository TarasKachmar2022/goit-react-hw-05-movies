import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const onInputChange = e => {
    const value = e.target.value.trim().toLowerCase();
    if (!value) return;
    setSearchName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName === '') {
      toast.error('Введіть значення для пошуку!');
      //   alert('Введіть значення для пошуку!');
      return;
    }

    onSubmit(searchName);
  };

  return (
    <header>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchName}
          onChange={onInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Enter name of movie..."
          required
        />

        <button type="submit">Search</button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

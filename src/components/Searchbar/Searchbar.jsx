import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  SearchbarBtn,
  SearchbarInput,
  SearchbarForm,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const onInputChange = e => {
    const value = e.target.value.toLowerCase();
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
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarInput
          type="text"
          value={searchName}
          onChange={onInputChange}
          autoFocus
          autoComplete="off"
          placeholder="Enter name of movie..."
        />

        <SearchbarBtn type="submit">Search</SearchbarBtn>
      </SearchbarForm>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

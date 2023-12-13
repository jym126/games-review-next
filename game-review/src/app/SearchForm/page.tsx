// components/SearchForm.tsx
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">Enter ID:</label>
      <input
      className='text-black'
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

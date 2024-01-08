"use client"
// components/SearchForm.tsx
import { useState } from 'react';

const SearchForm = () => {
  const [id, setId] = useState('');


  return (
    <form>
      <label htmlFor="id">Enter ID:</label>
      <input
      className='text-black w-40'
        type="text"
        id="id"
        name='id'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;

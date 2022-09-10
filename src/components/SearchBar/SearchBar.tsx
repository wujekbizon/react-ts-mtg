import { useState } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    console.log(e.target);
    setQuery(target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className="form-control">
        <label htmlFor="search">Search for a card</label>
        <input type="text" id="search" value={query} onChange={handleChange} />
      </form>
    </div>
  );
};
export default SearchBar;

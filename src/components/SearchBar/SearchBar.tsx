import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { setSearchQuery } from '../../state/homeSlice';
import { useRef, useEffect } from 'react';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { searchQuery } = useAppSelector((state) => state.home);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchQuery]);

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    dispatch(setSearchQuery(target.value));
  };
  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className="form-control">
        <input
          type="text"
          id="search"
          onChange={handleInputChange}
          placeholder="Search for a card"
          value={searchQuery}
          ref={searchInputRef}
        />
      </form>
    </div>
  );
};
export default SearchBar;

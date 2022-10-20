import './SearchBar.scss';
import { useAppDispatch } from '../../types/hooks';
import { setSearchQuery } from '../../state/homeSlice';

type Props = {
  query: string;
  handleChange: (e: React.FormEvent<EventTarget>) => void;
};

const SearchBar = () => {
  const dispatch = useAppDispatch();
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
        />
      </form>
    </div>
  );
};
export default SearchBar;

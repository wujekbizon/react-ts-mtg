import './SearchBar.scss';

type Props = {
  query: string;
  handleChange: (e: React.FormEvent<EventTarget>) => void;
};

const SearchBar = ({ query, handleChange }: Props) => {
  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className="form-control">
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleChange}
          placeholder="Search for a card"
        />
      </form>
    </div>
  );
};
export default SearchBar;

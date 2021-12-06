import './SearchBar.css';

const SearchBar = ({ getSearch, setSearchTerm }) => {
  const handleGetSearch = (e) => {
    e.preventDefault();
    getSearch();
  };

  return (
    <form onSubmit={(e) => handleGetSearch(e)}>
      <input
        type="text"
        placeholder="Enter Search Here..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;

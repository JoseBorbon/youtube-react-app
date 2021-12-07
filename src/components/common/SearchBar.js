import { useNavigate } from 'react-router';
import './SearchBar.css';

const SearchBar = ({ getSearch, setSearchTerm }) => {
  const navigate = useNavigate();
  const handleGetSearch = (e) => {
    e.preventDefault();
    getSearch();
    navigate('/');
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

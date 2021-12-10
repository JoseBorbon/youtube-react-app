import { useNavigate } from 'react-router';
import './SearchBar.css';
import searchIcon from '../../../media/search.png'

const SearchBar = ({ getSearch, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const handleGetSearch = (e) => {
    e.preventDefault();
    getSearch();
    setSearchTerm('');
    navigate('/');
  };

  return (
    <form onSubmit={(e) => handleGetSearch(e)}>
      <input
        className ="input-area"
        type="text"
        placeholder="Enter Search Here..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button className="search-icon" type="submit"><img src={searchIcon} className="search-icon-size"  /></button>
    </form>
  );
};

export default SearchBar;

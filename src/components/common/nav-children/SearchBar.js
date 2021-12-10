import { useNavigate } from "react-router";
import "./SearchBar.css";

const SearchBar = ({ getSearch, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const handleGetSearch = (e) => {
    e.preventDefault();
    getSearch();
    setSearchTerm("");
    navigate("/");
  };

  return (
    <form onSubmit={(e) => handleGetSearch(e)}>
      <input
        type="text"
        placeholder="Enter Search Here..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button type="submit" className="search">
        <i className="fas fa-search"> </i>
      </button>
    </form>
    
  );
};

export default SearchBar;

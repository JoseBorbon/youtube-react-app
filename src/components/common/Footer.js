import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
       <ul className="footer-container">
         <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/career">Careers</Link>
          </li>
          <li>
          <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul> 
    </footer>
  );
};

export default Footer;

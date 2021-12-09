import { v4 as uuid } from 'uuid';
import './ColorPalette.css';

const ColorPalette = ({ setCurrBGColor }) => {
  const handleClick = (e) => {
    setCurrBGColor(e.target.id);
  };
  const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

  const colorBoxes = colors.map((color) => (
    <li
      key={uuid()}
      className="ColorPalette-box"
      id={color}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></li>
  ));
  return (
    <ul
      className="ColorPalette-palette"
      style={{ height: '20px', width: '80px' }}
    >
      {colorBoxes}
    </ul>
  );
};

export default ColorPalette;

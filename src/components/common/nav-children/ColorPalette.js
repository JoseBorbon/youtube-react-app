import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { DispatchContext } from '../../../contexts/theme.context';
import colorHashMap from '../../../data/colors';
import './ColorPalette.css';

const ColorPalette = ({ isTrue, toggleIt }) => {
  const dispatch = useContext(DispatchContext);

  const handleClick = (e) => {
    dispatch({ type: e.target.id });
    toggleIt(!isTrue);
  };

  const colors = ['BLACK', 'SLATEBLUE', 'GREEN', 'ORANGE', 'YELLOW', 'WHITE'];
  const colorBoxes = colors.map((color) => (
    <li
      key={uuid()}
      className="ColorPalette-box"
      id={color}
      style={{ backgroundColor: colorHashMap[color] }}
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

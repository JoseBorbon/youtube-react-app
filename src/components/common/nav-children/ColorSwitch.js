import ColorPalette from './ColorPalette';
import './ColorSwitch.css';

const ColorSwitch = ({ isTrue, toggleIt }) => {
  return isTrue ? (
    <ColorPalette isTrue={isTrue} toggleIt={toggleIt} />
  ) : (
    <button
      style={{ height: '20px', width: '50px' }}
      onClick={() => toggleIt(!isTrue)}
    ></button>
  );
};

export default ColorSwitch;

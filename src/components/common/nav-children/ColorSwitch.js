import ColorPalette from './ColorPalette';
import './ColorSwitch.css';

const ColorSwitch = ({
  isColorSwitchToggled,
  handleSetIsColorSwitchToggled,
  currBGColor,
  setCurrBGColor,
  isTrue, 
  toggleIt,
}) => {
  return isTrue ? (
    <ColorPalette currBGColor={currBGColor} setCurrBGColor={setCurrBGColor} isTrue={isTrue} toggleIt={toggleIt} />
  ) : (
    <button
      style={{ height: '20px', width: '50px' }}
      onClick={() => toggleIt(!isTrue)}
    >
      
    </button>
  );
};

export default ColorSwitch;

import ColorPalette from './ColorPalette';

const ColorSwitch = ({
  isColorSwitchToggled,
  handleSetIsColorSwitchToggled,
  currBGColor,
  setCurrBGColor,
}) => {
  return isColorSwitchToggled ? (
    <ColorPalette currBGColor={currBGColor} setCurrBGColor={setCurrBGColor} />
  ) : (
    <button
      style={{ height: '20px', width: '50px' }}
      onClick={() => handleSetIsColorSwitchToggled(true)}
    >
      Colors
    </button>
  );
};

export default ColorSwitch;

import ColorPalette from './ColorPalette';

const ColorSwitch = ({
  isColorSwitchToggled,
  handleSetIsColorSwitchToggled,
}) => {
  return isColorSwitchToggled ? (
    <ColorPalette />
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

/*
I click on the button, in that slot a palette component gets rendered in it's place
--In order to create this we will need a state called isToggled and set it to false 
originally and then once clicked, we go ahead and set isToggled to true and then
once it's set to true, display a palette with values and the value attribute will contain string color

We will have another piece of state which will be called currBGColor and set it to the default originally and once
toggle is enabled and then color is chosen we 

either close the palette and revert back to button upon a selection or allow user to open and close when they want.

One of the potential blocks will be determining going forward if we are okay with sacrificing render which will interrupt video when user chooses to change background color
*/

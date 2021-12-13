import './Landing.css';

const Landing = ({ currBGColor }) => {
  return (
    <main
      style={{
        backgroundColor: currBGColor,
        color: currBGColor === 'RGB(24, 24, 24)' ? 'white' : 'initial',
      }}
    >
      <p>No Searches....yet!</p>
      <p>Add some cool video or image here</p>
    </main>
  );
};

export default Landing;

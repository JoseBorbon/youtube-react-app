import './Landing.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme.context';

const Landing = () => {
  const { color, isDark } = useContext(ThemeContext);
  return (
    <main
      style={{
        backgroundColor: color,
        color: isDark ? 'white' : '#474552',
      }}
    >
      <p>No Searches....yet!</p>
      <p>Add some cool video or image here</p>
    </main>
  );
};

export default Landing;

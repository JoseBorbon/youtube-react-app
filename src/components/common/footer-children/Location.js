import './Location.css';

const Location = ({ styles }) => {
  return (
    <main>
      <iframe
        className="field"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8666592099808!2d-73.94411018451345!3d40.74295947932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592e9fcf1a65%3A0x7e37044e79db712a!2s47-10%20Austell%20Pl%202nd%20floor%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1639111475214!5m2!1sen!2sus"
        style={styles}
      />
    </main>
  );
};

Location.defaultProps = {
  styles: {
    width: '450px',
    height: '410px',
    style: 'border:0',
    allowfullscreen: '',
    loading: 'lazy',
  },
};

export default Location;

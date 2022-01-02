import { Button, TextField, NativeSelect, FormControl } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme.context';
import './Contact.css';

const Contact = () => {
  const { color, isDark } = useContext(ThemeContext);

  return (
    <main className="contact" style={{ backgroundColor: color }}>
      <FormControl
        className="showcase-form"
        sx={{ color: isDark ? 'white' : 'black' }}
      >
        <h2>Get In Touch</h2>
        <TextField
          id="filled-name"
          label="Name"
          fullWidth
          margin="normal"
          variant="filled"
          sx={{
            color: 'white',
            margin: '0px',
            marginTop: '5px',
          }}
        />
        <TextField
          id="filled-company"
          label="Company"
          fullWidth
          margin="normal"
          variant="filled"
          sx={{
            margin: '0px',
            marginTop: '5px',
          }}
        />
        <TextField
          label="Email"
          fullWidth
          autocomplete="none"
          variant="filled"
          sx={{
            margin: '0px',
            marginTop: '5px',
          }}
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          autocomplete="none"
          variant="filled"
          sx={{
            margin: '0px',
            marginTop: '5px',
          }}
        />
        <NativeSelect
          labelId="demo-simple-select-label"
          id={isDark ? 'demo-simple-select-dark' : 'demo-simple-select'}
          defaultValue="default"
          label="Role"
          fullWidth
          sx={{
            margin: '0px',
            marginTop: '5px',
          }}
          variant="filled"
        >
          <option value="default" disabled>
            Select your role
          </option>
          <option value="manager">Engineering Manager</option>
          <option value="fullstack">Full Stack Engineer</option>
          <option value="frontend">Front-End Engineer</option>
          <option value="cloud">Cloud Engineer</option>
          <option value="fullstack">Full Stack Engineer</option>
          <option value="frontend">Front-End Engineer</option>
          <option value="cloud">Cloud Engineer</option>
          <option value="instructor">Technical Instructor</option>
          <option value="student">Student</option>
        </NativeSelect>

        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" fullWidth>
            Upload Here
          </Button>
        </label>

        <Button
          type="submit"
          variant="contained"
          style={{
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
          }}
        >
          Send
        </Button>
      </FormControl>
    </main>
  );
};

export default Contact;

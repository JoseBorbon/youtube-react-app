import { createContext, useReducer } from 'react'; //import reducer as well
import themeReducer from '../reducers/theme.reducer';
//create context
export const ThemeContext = createContext();
export const DispatchContext = createContext();

//create provider
const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    color: '#F2E6E6',
    isDark: false,
  });
  return (
    <ThemeContext.Provider value={theme}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

const reducer = (state, action) => {
  switch (action.type) {
    case 'BLACK':
      return { color: '#242424', isDark: true };
    case 'SLATEBLUE':
      return { color: '#6A5ACD', isDark: true };
    case 'GREEN':
      return { color: '#7FFF00', isDark: false };
    case 'ORANGE':
      return { color: '#FEBE10', isDark: false };
    case 'YELLOW':
      return { color: '#FFD700', isDark: false };
    default:
      return { color: '#F2E6E6', isDark: false };
  }
};

export default reducer;

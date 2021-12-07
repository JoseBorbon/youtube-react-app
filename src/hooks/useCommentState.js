import { useState } from 'react';

export const useCommentState = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  //reset method
  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};

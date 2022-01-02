import { v4 as uuid } from 'uuid';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme.context';
import { useCommentState } from '../../../hooks/useCommentState';

import './Comments.css';

const Comments = () => {
  const { isDark } = useContext(ThemeContext);
  const [name, updateName, resetName] = useCommentState('');
  const [comment, updateComment, resetComment] = useCommentState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, comment };
    setComments([...comments, newComment]);
    resetName('');
    resetComment('');
  };

  const sectionComments = comments.map(({ name, comment }) => (
    <li
      className="Comments-comment"
      key={uuid()}
      style={{ color: isDark ? 'white' : 'initial' }}
    >
      <p className="Comments-name">User Name: {name}</p>
      <p> Comment: {comment}</p>
      <div className="line-divider"></div>
    </li>
  ));

  return (
    <div>
      <form
        className="Comments-thread"
        onSubmit={handleSubmit}
        style={{
          color: isDark ? 'white' : 'initial',
        }}
      >
        <label htmlFor="Comments-input-name">Name</label>
        <input
          className="Comments-input"
          type="text"
          id="Comments-input-name"
          value={name}
          onChange={updateName}
          placeholder="Name..."
        />
        <label htmlFor="Comments-comment">Comment</label>
        <input
          className="Comments-input"
          type="text"
          id="Comments-comment"
          value={comment}
          onChange={updateComment}
          placeholder="..."
        />
        <input className="Comments-submit-button" type="submit" />
        <button className="bt-comment">Delete</button>
        <button className="bt-comment">Edit</button>
      </form>
      <hr style={{ width: '100%' }} />
      <ul className="Comments-list">{sectionComments}</ul>
    </div>
  );
};

export default Comments;

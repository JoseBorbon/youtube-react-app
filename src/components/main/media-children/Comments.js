import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useCommentState } from '../../../hooks/useCommentState';
import './Comments.css';

const Comments = () => {
  const [name, updateName, resetName] = useCommentState('');
  const [comment, updateComment, resetComment] = useCommentState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, comment };
    //push comment into array of comments which is an array of objects with keys name and comment
    setComments([...comments, newComment]);
    // reset name and comment states
    resetName('');
    resetComment('');
  };

  const sectionComments = comments.map(({ name, comment }) => (
    <li key={uuid()}>
      <div>
        <p>{name}</p>
        <p>{comment}</p>
      </div>
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Comments-name">Name</label>
        <input
          type="text"
          id="Comments-name"
          value={name}
          onChange={updateName}
        />
        <label htmlFor="Comments-comment">Comment</label>
        <input
          type="text"
          id="Comments-comment"
          value={comment}
          onChange={updateComment}
        />
        <input type="submit" />
      </form>
      <hr style={{ width: '80%' }} />
      <ul>{sectionComments}</ul>
    </div>
  );
};

export default Comments;

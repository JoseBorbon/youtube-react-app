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
    setComments([...comments, newComment]);
    resetName('');
    resetComment('');
  };

  const sectionComments = comments.map(({ name, comment }) => (
    <li className="Comments-comment" key={uuid()}>
      <p className="Comments-name">{name}</p>
      <p>{comment}</p>
    </li>
  ));

  return (
    <div>
      <form className="Comments-thread" onSubmit={handleSubmit}>
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
      </form>
      <hr style={{ width: '80%' }} />
      <ul className="Comments-list">{sectionComments}</ul>
    </div>
  );
};

export default Comments;

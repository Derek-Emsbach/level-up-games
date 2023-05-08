import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, loadComments } from './commentsSlice';

function Comments({ postId }) {
  const [commentText, setCommentText] = useState('');
  const comments = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments(postId));
  }, [dispatch, postId]);

  const handleSubmit = e => {
    e.preventDefault();
    if (commentText.trim()) {
      dispatch(addComment({ postId, text: commentText }));
      setCommentText('');
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;

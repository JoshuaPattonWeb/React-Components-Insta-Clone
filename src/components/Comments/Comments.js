import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      { comments.map(each => {
        return <Comment comment={each} key={each.id} />
  })}
    </div>
  );
};

export default Comments;

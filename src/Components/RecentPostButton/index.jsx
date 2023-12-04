import React from 'react';
import './style.css';

function ButtonRecentPost({title, newtitle}) {
  return (
    <div>
      <button className='button1'>{title}</button>
      <button className='button2'>{newtitle}</button>
      
    </div>
  );
}

export default ButtonRecentPost;

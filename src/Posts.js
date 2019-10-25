import React from 'react'
import './Posts.css'
import rock from './img/rock_icon_black.jpg'

function Posts() {
  return (
    <div className="postsContainer">
      <h2 className="postsTitle">Popular posts</h2>
      <div className="postPreview">
        <h3 className="postTitle">
          Notes on fear, falling, and Tinder
        </h3>
        <p className="postDescription">
          Like love, the world of sport climbing has a language of its own: beautifully precise words that function as building blocks, map keys drawn by (mostly) amatuer cartographers. Words like “beta,” which is a special kind of knowledge...
        </p>
        <div className="postCategory">
          <img src={rock} alt="rock icon" className="postCategoryImage"/>
          <p className="label">Technique</p>
        </div>
      </div>
    </div>
  );
}

export default Posts
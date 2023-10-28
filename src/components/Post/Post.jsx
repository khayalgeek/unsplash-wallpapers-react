import React from 'react'
import postStyle from './post.module.css'
const Post = (props) => {
  return (
    <div className={postStyle.card}>
      <div className={postStyle.imgContainer}>
        <img src={props.post.urls.small} alt={props.post.slug} />
      </div>
      <div className={postStyle.container}>
        <h5>{props.post.alt_description}</h5>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span>Color: </span>
          <div style={{ backgroundColor: props.post.color, width: '20px', height: '20px', borderRadius: '5px', marginLeft: '10px' }}>
          </div>
        </div>
        <p className={postStyle.decription}>{props.post.description ?? "Melumat qeyd edilmeyib"}</p>
      </div>
    </div>
  )
}

export default Post;

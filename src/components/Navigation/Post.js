import React from 'react';
import HeartIcon from './HeartIcon';
import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      /* 게시물 헤더 */
      <div className='post__header'>
        <img src='https://via.placeholder.com/32' alt='Profile' className='post__avatar' />
        <span className='post__username'>selra_z0921</span>
      </div>
      /* 게시물 이미지 */
      <img src='https://via.placeholder.com/600x400' alt='Post' className='post__image' />
      /* 게시물 내용 */
      <div className='post__content'>
        <p>
          <strong>selra_z0921</strong> #뮤지컬 #오페라의유령 #벌써아쉽다..
        </p>
      </div>
      /* 게시물 하단 */
      <div className='post__footer'>
        <p>댓글 보기</p>
        <HeartIcon />
      </div>
    </div>
  );
};

export default Post;

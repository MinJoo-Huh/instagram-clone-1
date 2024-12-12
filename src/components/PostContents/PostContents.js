import React, { useState } from 'react';
import classes from './PostContents.module.css';
import PostImage from './PostImage';
import HeartIcon from '../Navigation/HeartIcon';

const PostContents = () => {
  // 좋아요 상태
  const [likes, setLikes] = useState(7);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태
  const [comments, setComments] = useState([]); // 댓글 상태
  const [commentText, setCommentText] = useState(''); // 댓글 입력 상태

  // 좋아요 버튼 클릭 시 상태 변경
  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // 댓글 추가 기능
  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments((prevComments) => [...prevComments, { text: commentText, id: new Date().toISOString() }]);
      setCommentText(''); // 댓글 입력 필드 초기화
    } else {
      alert('댓글을 입력하세요!');
    }
  };

  // 댓글 삭제 기능
  const handleDeleteComment = (id) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  // 메뉴 열기/닫기 기능
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.post_container}>
      {/* 헤더 */}
      <div className={classes.post_header}>
        <img src='profile.jpg' alt='Profile Picture' className={classes.profile_img} />
        <span className={classes.username}>supercoding</span>
        <span className={classes.menu_icon} onClick={toggleMenu}>
          ⋮
        </span>
      </div>

      {/* 게시물 이미지 */}
      <div className={classes.post_image}>
        <PostImage />
        {/* <img src='cake.jpg' alt='Post Image' /> */}
      </div>

      {/* 아이콘 및 좋아요 */}
      <div className={classes.post_actions}>
        <i className={classes.action_icon} onClick={handleLikeClick}>
          ❤️
        </i>
        <i className={classes.action_icon}>💬</i>
        <i className={classes.action_icon}>📤</i>
      </div>
      <div className={classes.likes}>좋아요 {likes}개</div>

      {/* 설명 */}
      <div className={classes.post_description}>
        <span className={classes.username}>supercoding</span>
        <span>환영합니다 슈퍼코딩입니다 😊😊 </span>
      </div>

      {/* 댓글 */}
      <div className={classes.comments_section}>
        <div id='commentsContainer'>
          {/* 댓글 리스트 */}
          {comments.map((comment) => (
            <div key={comment.id} className={classes.comment}>
              <span>{comment.text}</span>
              <div>
                <HeartIcon />
                <button onClick={() => handleDeleteComment(comment.id)} className={classes.delete_comment_button}>
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.add_comment}>
          <input
            type='text'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder='댓글을 입력하세요...'
          />
          <button onClick={handleAddComment}>게시</button>
        </div>
      </div>

      {/* 팝업 메뉴 */}
      {isMenuOpen && (
        <div className={classes.popup_menu}>
          <ul>
            <li>저장</li>
            <li>QR 코드</li>
            <li>즐겨찾기에 추가</li>
            <li>팔로우 취소</li>
            <li>이 계정 정보</li>
            <li>번역</li>
            <li>선택 캡션</li>
            <li>이 게시물이 표시되는 이유</li>
            <li>숨기기</li>
            <li className={classes.danger}>신고</li>
          </ul>
          <button onClick={toggleMenu} className={classes.close_menu}>
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default PostContents;

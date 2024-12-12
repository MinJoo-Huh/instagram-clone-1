import React, { useState } from "react";
import classes from "./PostHeartGood.module.css";

const PostHeartGood = () => {
  const [heartClick, setHeartClick] = useState(false);
  const [bookmarkClick, setBookmarkClick] = useState(false);
  const [isHeartHover, setIsHeartHover] = useState(false);
  const [isBookmarkHover, setIsBookmarkHover] = useState(false);

  // Mouse Click event
  const heartClickHandler = () => {
    setHeartClick((heartClick) => !heartClick);
  };

  const bookmarkClickHandler = () => {
    setBookmarkClick((bookmarkClick) => !bookmarkClick);
  };

  // Mouse Hover or Out event
  const isHeartHoverHandler = () => {
    setIsHeartHover((isHeartHover) => !isHeartHover);
  };

  const isBookmarkHoverHandler = () => {
    setIsBookmarkHover((isBookmarkHover) => !isBookmarkHover);
  };

  return (
    <section className={classes.postHeartGood}>
      <div className={classes.leftIcons}>
        <img
          className={classes.heartIcon}
          // 1. click : true -> red heart
          // 2. click : fasle & MouseOver -> heart
          // 3. click : false & MouseOut -> gray heart
          src={
            heartClick
              ? `${process.env.PUBLIC_URL}/images/redHeart.svg`
              : isHeartHover
              ? `${process.env.PUBLIC_URL}/images/grayHeart.svg`
              : `${process.env.PUBLIC_URL}/images/heart.svg`
          }
          onClick={heartClickHandler}
          onMouseOver={isHeartHoverHandler}
          onMouseOut={isHeartHoverHandler}
        />
        <img
          className={classes.messageIcon}
          src={`${process.env.PUBLIC_URL}/images/message.svg`}
        />
        <img
          className={classes.shareIcon}
          src={`${process.env.PUBLIC_URL}/images/paperAirplane.svg`}
        />
      </div>
      <div className={classes.rightIcon}>
        <img
          className={classes.bookmarkIcon}
          src={
            bookmarkClick
              ? `${process.env.PUBLIC_URL}/images/blackBookmark.svg`
              : isBookmarkHover
              ? `${process.env.PUBLIC_URL}/images/grayBookmark.svg`
              : `${process.env.PUBLIC_URL}/images/bookmark.svg`
          }
          onClick={bookmarkClickHandler}
          onMouseOver={isBookmarkHoverHandler}
          onMouseOut={isBookmarkHoverHandler}
        />
      </div>
    </section>
  );
};

export default PostHeartGood;

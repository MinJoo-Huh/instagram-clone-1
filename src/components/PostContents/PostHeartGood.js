import React from "react";
import classes from "./PostHeartGood.module.css";

const PostHeartGood = () => {
  return (
    <section className={classes.postHeartGood}>
      <div className={classes.leftIcons}>
        <img
          className={classes.heartIcon}
          src={`${process.env.PUBLIC_URL}/images/heart.svg`}
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
          src={`${process.env.PUBLIC_URL}/images/bookmark.svg`}
        />
      </div>
    </section>
  );
};

export default PostHeartGood;

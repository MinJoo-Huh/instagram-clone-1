import React from "react";
import classes from "./PostImage.module.css";

const PostImage = () => {
  return (
    <section className={classes.postImage}>
      <img src={`${process.env.PUBLIC_URL}/images/해변.jpg`} />
      <button className={classes.beforeImageButton} type="button">
        {"<"}
      </button>
      <button className={classes.afterImageButton} type="button">
        {">"}
      </button>
    </section>
  );
};

export default PostImage;

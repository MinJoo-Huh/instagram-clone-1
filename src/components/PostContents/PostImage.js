import React, { useState } from "react";
import classes from "./PostImage.module.css";

const PostImage = () => {
  // 니증에 폴더 안의 이미지 전부 가져오기로 변경 -> props로 받자!
  const images = [
    { src: `${process.env.PUBLIC_URL}/images/user1/cat1.jpg`, title: "image1" },
    { src: `${process.env.PUBLIC_URL}/images/user1/cat2.jpg`, title: "image2" },
    { src: `${process.env.PUBLIC_URL}/images/user1/cat3.jpg`, title: "image3" },
  ];

  // 게시물에 표출되는 이미지 인덱스
  const [curImgIndex, setCurImgIndex] = useState(0);

  // 상수
  const FIRST_IMAGE_INDEX = 0;
  const LAST_IMAGE_INDEX = images.length - 1;
  const MOVE_IMAGE_INDEX = 1; // 이동값

  const prevBtnClickHandler = () => {
    if (curImgIndex <= LAST_IMAGE_INDEX)
      setCurImgIndex(curImgIndex - MOVE_IMAGE_INDEX);
  };

  const nextBtnClickHandler = () => {
    if (curImgIndex >= FIRST_IMAGE_INDEX)
      setCurImgIndex(curImgIndex + MOVE_IMAGE_INDEX);
  };

  return (
    <div className={classes.postImage}>
      <div className={classes.showImage}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.title}
            style={{
              transform: `translateX(${-480 * curImgIndex}px)`,
              transition: "all 0.4s ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        className={classes.prevImageButton}
        type="button"
        onClick={prevBtnClickHandler}
        style={{ display: curImgIndex === 0 ? "none" : "" }}
      >
        {"<"}
      </button>
      <button
        className={classes.nextImageButton}
        type="button"
        onClick={nextBtnClickHandler}
        style={{ display: curImgIndex === LAST_IMAGE_INDEX ? "none" : "" }}
      >
        {">"}
      </button>
    </div>
  );
};

export default PostImage;

import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import userData from '../../userData.js';

const Carousel = () => {
  const [scrollInfo, setScrollInfo] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  });

  const carouselContainerRef = useRef();

  useEffect(() => {
    const updateScrollInfo = () => {
      if (carouselContainerRef.current) {
        setScrollInfo({
          scrollLeft: carouselContainerRef.current.scrollLeft,
          scrollWidth: carouselContainerRef.current.scrollWidth,
          clientWidth: carouselContainerRef.current.clientWidth,
        });
      }
    };

    updateScrollInfo();

    const handleScroll = () => {
      updateScrollInfo();
    };

    const currentRef = carouselContainerRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const slideButtonHandler = (direction) => {
    if (direction === 'prev') {
      carouselContainerRef.current.scrollBy(-300, 0);
    } else if (direction === 'next') {
      carouselContainerRef.current.scrollBy(300, 0);
    }
  };

  const shouldHidePrevButton = scrollInfo.scrollLeft === 0;
  const shouldHideNextButton = scrollInfo.scrollLeft + scrollInfo.clientWidth >= scrollInfo.scrollWidth - 5;

  return (
    <div className={styles.carousel}>
      <div className={styles['carousel-container']} ref={carouselContainerRef}>
        {userData.map((item) => {
          return (
            <div className={styles['carousel-box']} key={item.id}>
              <div className={styles['image-box']}>
                <img src={item.url} alt='profile' />
              </div>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
      {shouldHidePrevButton ? null : (
        <button className={styles['prev-btn']} onClick={() => slideButtonHandler('prev')}>
          〈
        </button>
      )}
      {shouldHideNextButton ? null : (
        <button className={styles['next-btn']} onClick={() => slideButtonHandler('next')}>
          〉
        </button>
      )}
    </div>
  );
};

export default Carousel;

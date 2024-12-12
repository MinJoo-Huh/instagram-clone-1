import { useEffect, useState } from 'react';
import userData from '../userData';
import styles from './Recommendation.module.css';

const Recommendation = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  const getRandomUsers = () => {
    const randomUserData = [...userData].sort(() => 0.5 - Math.random());
    return randomUserData.slice(0, 5);
  };

  useEffect(() => {
    setRandomUsers(getRandomUsers());
  }, []);

  return (
    <div className={styles.recommendation}>
      <div className={styles['recommendation__more-box']}>
        <p className={styles['recommendation__more-text']}>회원님을 위한 추천</p>
        <button className={styles['recommendation__more-btn']}>모두 보기</button>
      </div>
      <div className={styles['recommendation__user-list']}>
        {randomUsers.map((item) => {
          return (
            <div className={styles['recommendation__user-box']} key={item.id}>
              <div className={styles['recommendation__user-image-box']}>
                <img src={item.url} alt='profile' />
              </div>
              <div className={styles['recommendation__user-info']}>
                <h4 className={styles['recommendation__user-id']}>{item.id}</h4>
                <p className={styles['recommendation__user-follow-count']}>OOO님 외 {item.follow}명이 팔로우합니다</p>
              </div>
              <button className={styles['recommendation__user-follow-btn']}>팔로우</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;

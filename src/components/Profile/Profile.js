import styles from './Profile.module.css';
import Recommendation from '../Recommendation/Recommendation';

const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles['profile__image-box']}>
          <img src='https://placehold.co/400' alt='profile' />
        </div>
        <div className={styles['profile__info']}>
          <h4 className={styles['profile__info-id']}>gil-dong</h4>
          <p className={styles['profile__info-name']}>홍길동</p>
        </div>
        <button className={styles['profile__change-btn']}>전환</button>
      </div>
      <Recommendation />
    </>
  );
};

export default Profile;

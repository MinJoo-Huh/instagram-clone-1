import Carousel from './components/Carousel/Carousel';
import Profile from './components/Profile/Profile';
import PostImage from './components/PostContents/PostImage';
import PostHeartGood from './components/PostContents/PostHeartGood';
import './app.css';

const App = () => {
  return (
    <div className='container'>
      <nav></nav>
      <main>
        <div className='post-area'>
          <Carousel />
          <PostImage />
          <PostHeartGood />
        </div>
        <div className='recommendation-area'>
          <Profile />
        </div>
      </main>
    </div>
  );
};

export default App;

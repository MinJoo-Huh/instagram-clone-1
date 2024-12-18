import Carousel from './components/Carousel/Carousel';
import Profile from './components/Profile/Profile';
import PostContents from './components/PostContents/PostContents';
import Sidebar from './components/Navigation/Sidebar';
import './app.css';

const App = () => {
  return (
    <div className='container'>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <div className='post-area'>
          <Carousel />
          <PostContents />
        </div>
        <div className='recommendation-area'>
          <Profile />
        </div>
      </main>
    </div>
  );
};

export default App;

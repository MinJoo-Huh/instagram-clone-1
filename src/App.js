import Carousel from './components/Carousel';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <nav></nav>
      <main>
        <div className='post-area'>
          <Carousel />
        </div>
        <div className='recommendation-area'>
          <Profile />
        </div>
      </main>
    </div>
  );
};

export default App;

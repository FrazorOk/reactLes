import './App.css';
import Header from './components/Header/Header';
import Naivgation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

let App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-row">
        <Naivgation />
        <Profile />
      </div>
    </div>
  );
};

export default App;

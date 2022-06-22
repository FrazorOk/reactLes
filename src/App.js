import './App.css';
import Header from './components/Header';
import Naivgation from './components/Navigation';
import Profile from './components/Profile';

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

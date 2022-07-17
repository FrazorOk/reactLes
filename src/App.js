import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Naivgation from './components/Navigation/Navigation';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

let App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-row">
          <Naivgation />
          <div className="main">
            <Routes>
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/users/*" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

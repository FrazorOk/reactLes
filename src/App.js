import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Naivgation from './components/Navigation/Navigation';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

let App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-row">
          <Naivgation />
          <div className="main">
            <Routes>
              <Route
                path="/profile/*"
                element={
                  <Profile profile={props.state.profile} dispatch={props.dispatch} />
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <Dialogs dialogs={props.state.dialogs} dispatch={props.dispatch} />
                }
              />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import NaivgationContainer from './components/Navigation/Navigation';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer />
				<div className="app-row">
					<NaivgationContainer />
					<div className="main">
						<Routes>
							<Route exact path="/profile/:userId/" element={<ProfileContainer />} />
							<Route exact path="/profile/" element={<ProfileContainer />} />
							<Route exact path="/" element={<ProfileContainer />} />
							<Route path="/dialogs/*" element={<DialogsContainer />} />
							<Route path="/news" element={<News />} />
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

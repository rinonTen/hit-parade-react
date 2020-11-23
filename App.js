import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Songs from './Pages/Songs';
import Cart from './Pages/Cart';
import Lyrics from './Pages/Lyrics'
import AddSong from './Pages/AddSong';
import Styles from './Pages/Styles'
import StylesDetail from './Pages/StylesDetail';

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<Songs />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/song/:songId">
						<Lyrics />
					</Route>
					<Route exact path="/styles">
						<Styles />
					</Route>
					<Route exact path="/styles/:styleName">
						<StylesDetail />
					</Route>
					<Route exact path="/add">
						<AddSong />
					</Route>
				</Switch>
			</main>
		</>
	)
}

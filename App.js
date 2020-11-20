import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Songs from './Pages/Songs';
import Cart from './Pages/Cart';
import Lyrics from './Pages/Lyrics';

export default function App() {
  return (
    <>
      <Header />
      <main>
      <Switch> 
				<Route exact path="/">
            <Songs />
				</Route>
				<Route path="/cart">
			    <Cart />
				</Route>
        <Route path="/lyrics">
			    <Lyrics />
				</Route>
			</Switch>
      </main>
    </>
  )
}

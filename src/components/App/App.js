import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import Home from "../Home/Home";

function App() {

	return (
		<Switch>
			<Route
				exact
				path="/menu"
				render={(routeProps) => {
					return (
						<div className="App">
							<Nav />
							<header className="App-header">
								<p>Menu</p>
							</header>
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/about-us"
				render={(routeProps) => {
					return (
						<div className="App">
							<Nav />
							<header className="App-header">
								<p>About Us</p>
							</header>
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/"
				render={(routeProps) => {
					return (
						<div className="App">
							<Nav />
							<header className="App-header">
								<Card content={<Home />}/>
							</header>
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

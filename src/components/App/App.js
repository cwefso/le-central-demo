import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";

function App() {
  const main = <section className="main">
    <section className="greeting">
      Bienvenue
      <section className="covid">Due to Covid-19, our dining room is currently closed. We have expanded our outdoor dining options, but a reservation will be required until further notice. Merci pour votre compréhension.</section>
    </section>
    <span></span>
    <section className="info">Info</section>
  </section>

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
								<Card content={main}/>
							</header>
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

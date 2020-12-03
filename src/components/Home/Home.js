import React, {useState, useEffect} from "react";
// import "./Home.css";

function Home() {

	const [special, setSpecial] = useState([])

	useEffect(() =>{
		fetch('https://le-central-backend.herokuapp.com/specials')
		.then((res) => res.json())
		.then((result) => setSpecial(result[result.length - 1]))
		.catch((err) => console.log(err.message))
	}, [])

	return (
		<section className="main">
			<section className="greeting">
				Bienvenue
				<section className="covid">
					Due to Covid-19, our dining room is currently closed. We have expanded
					our outdoor dining options, but a reservation will be required until
					further notice. Merci pour votre compréhension.
				</section>
			</section>
			{special &&
							<section className="special">
							<h2>La Spécialité du Jour</h2>
							<p>{special.name}</p>
							<p>{special.description}</p>
							<p>${special.price}</p>
						</section>
			}
			{!special &&
				<section className="special">
				<h2>La Spécialité du Jour</h2>
				<p>special not available</p>
			</section>
			}
			<span></span>
			<section className="info">
				<section className="hours">
					<h2>Hours</h2>
					<p>Mon-Fri 11:30AM - 02:00PM</p>
					<p>Mon-Fri 05:30PM - 10:00PM</p>
					<p>Sat 11:00AM - 02:00PM</p>
					<p>Sat 05:00PM - 10:00PM</p>
					<p>Sun 11:00AM - 02:00PM</p>
					<p>Sun 05:00PM - 09:00PM</p>
				</section>
				<section className="contact">
					<h2>Contact Us</h2>
					<p>P: 303-863-8094</p>
					<p>E: contactus@lecentral.com</p>
					<p className="address">
						112 E 8th Ave
						<br></br>
						Denver, CO 80203
					</p>
				</section>
			</section>
		</section>
	);
}

export default Home;

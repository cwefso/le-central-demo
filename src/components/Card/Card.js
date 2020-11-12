import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card({ content }) {
	return <section className="card">{content}</section>;
}

export default Card;

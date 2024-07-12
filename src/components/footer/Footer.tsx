import React from "react";
import style from './Footer.module.css'

const Footer = () => {
	return (
		<div className={style.footer}>
			Challenge by{" "}
			<a href="https://www.frontendmentor.io?ref=challenge">
				Frontend Mentor
			</a>
			. Coded by <a href="#">Simon Winter</a>.
		</div>
	);
};

export default Footer;

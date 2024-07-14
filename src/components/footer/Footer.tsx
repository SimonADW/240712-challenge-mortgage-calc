import React from "react";
import style from './Footer.module.css'

const Footer = () => {
	return (
		<div className={style.footer}>
			<div>
				Challenge by :{" "}
				<a href="https://www.frontendmentor.io?ref=challenge">
					Frontend Mentor
				</a>
			</div>


			<div>Coded by : <a href="#">Simon Winter</a>.</div>
		</div>
	);
};

export default Footer;

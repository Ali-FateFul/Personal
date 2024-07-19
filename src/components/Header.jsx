import React from "react";

//styles
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			<h3 className={styles.logo}><span>F</span>ate<span>F</span>ul</h3>
			<ul className={styles.menu}>
				<li>
					<a href=''>Home</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href=''>Services</a>
				</li>
				<li>
					<a href=''>Projects</a>
				</li>
				<li>
					<a href=''>Education</a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;

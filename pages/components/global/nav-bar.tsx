import Link from "next/link";
import Router from "next/router";
import styles from "./nav-bar.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faArrowRight);

interface PageLinks {
	home: string;
	about: string;
	contact: string;
	dashboard: string;
}

export default function NavBar({ ...props }) {
	const pages: PageLinks = {
		home: "home",
		about: "about",
		contact: "contact",
		dashboard: "dashboard",
	};

	const [menuShowing, setMenuShowing] = useState(false);

	return (
		<>
			{/* Mobile navigation menu*/}
			<div
				className={styles.mobile_menu}
				style={{ width: menuShowing ? "100%" : 0 }}
			>
				<div className={styles.mobile_menu_content}>
					{Object.values(pages).map((p: string, i: number) => {
						return (
							<Link href={`/${p !== "home" ? p : ""}`} key={i}>
								<a className={`${props.active === p ? styles.active : ""}`}>
									{p.toUpperCase()}
								</a>
							</Link>
						);
					})}
				</div>
			</div>

			{/* Desktop navigation menu */}

			<div className={styles.nav_container}>
				<h2 className={styles.nav_logo} onClick={() => Router.push("/")}>
					Crippy
				</h2>

				<div
					className={styles.burger_menu}
					onClick={() =>
						menuShowing ? setMenuShowing(false) : setMenuShowing(true)
					}
				>
					<FontAwesomeIcon icon={["fas", "bars"]} size="2x" />
				</div>

				<div className={styles.nav_links}>
					{Object.values(pages).map((p: string, i: number) => {
						return (
							<Link href={`/${p !== "home" ? p : ""}`} key={i}>
								<a
									className={`${styles.nav_link} ${
										props.active === p ? styles.active : ""
									}`}
								>
									{p.toUpperCase()}
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
}

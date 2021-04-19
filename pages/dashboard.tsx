import NavBar from "./components/global/nav-bar";
import styles from "../styles/Dashboard.module.css";

import TopBar from "./components/dashboard/top-bar";
import AddIntegration from "./components/dashboard/add-integration";

export default function Dashboard() {
	const noIntegrations = false;

	const sideBarOptions = [
		"graph",
		"market",
		"my stocks",
		"buy stocks",
		"sell stocks",
		"notifications",
		"account",
	];

	if (noIntegrations) {
		return (
			<div>
				<NavBar active="dashboard"></NavBar>
				<AddIntegration></AddIntegration>
			</div>
		);
	}

	return (
		<div>
			<NavBar active="dashboard"></NavBar>

			<div className={styles.wrapper}>
				<div className={styles.left_side}>
					{sideBarOptions.map((v, index) => {
						return (
							<div key={index}>
								<span className={styles.left_side_option}>
									{v.toUpperCase()}
								</span>
								<div className={styles.separator}></div>
							</div>
						);
					})}
				</div>

				<div className={styles.right_side}></div>
			</div>
		</div>
	);
}

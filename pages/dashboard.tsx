import NavBar from "./components/global/nav-bar";
import styles from "../styles/Dashboard.module.css";

import AddIntegration from "./components/dashboard/add-integration";
import { useState } from "react";

import HomeView from "./components/dashboard/home-view";
import FriendView from "./components/dashboard/friend-view";
import NotificationsView from "./components/dashboard/notifications-view";

export default function Dashboard() {
	const noIntegrations = false;
	const [page, setPage] = useState("home");

	const sideBarOptions = [
		"home",
		"friends",
		"my stocks",
		"notifications",
		"account",
	];

	if (noIntegrations) {
		return (
			<div>
				<NavBar active="dashboard"></NavBar>
				<AddIntegration />
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
								<span
									className={styles.left_side_option}
									onClick={(_) => setPage(v)}
								>
									{v.toUpperCase()}
								</span>
								<div className={styles.separator}></div>
							</div>
						);
					})}
				</div>

				<div className={styles.right_side}>
					{/* Display subpages dynamically */}
					{
						{
							home: <HomeView />,
							friends: <FriendView />,
							notifications: <NotificationsView />,
						}[page]
					}
				</div>
			</div>
		</div>
	);
}

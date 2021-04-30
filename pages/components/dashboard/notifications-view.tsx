import styles from "../../../styles/Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import NotificationForm from "./components/create-notification-form";

export default function NotificationsView() {
	const [createMenuShowing, setCreateMenuShowing] = useState(false);

	return (
		<>
			<h3 className={styles.friend_activity_name}>Price Notifications</h3>

			<div
				className={styles.create_notification_wrapper}
				onClick={() => setCreateMenuShowing(!createMenuShowing)}
			>
				<span className={styles.friend_activity_name}>
					Create New Notification
				</span>
				<FontAwesomeIcon
					icon={createMenuShowing ? faChevronUp : faChevronDown}
					color={"grey"}
				/>
			</div>

			{createMenuShowing && <NotificationForm />}
		</>
	);
}

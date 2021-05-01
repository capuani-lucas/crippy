import styles from "../../../styles/Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import NotificationForm from "./components/create-notification-form";

export default function NotificationsView() {
	const [createMenuShowing, setCreateMenuShowing] = useState(false);
	const [accordionIndex, setAccordionIndex] = useState(-1);

	const temporaryData = [
		{
			coin: "BTC",
			increases: "5",
			time: "5 minutes",
		},
		{},
		{},
		{},
		{},
	];

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

			<div className={styles.notifications_wrapper}>
				<span className={styles.friend_activity_name}>My notifications</span>
				<div className={styles.friend_list_wrapper}>
					{temporaryData.map((value, index) => {
						return (
							<>
								<div
									key={index}
									className={styles.friend}
									onClick={() =>
										setAccordionIndex(accordionIndex === index ? -1 : index)
									}
								>
									<span>{`${value.coin} changes by ${value.increases}% in ${value.time}`}</span>
								</div>

								{accordionIndex === index && (
									<>
										<br />
										<button className={styles.delete_button}>Delete</button>
									</>
								)}
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

import { SyntheticEvent } from "react";
import styles from "../../../../styles/Dashboard.module.css";
import { createNotification } from "../../../../lib/apiWrapper";

export default function NotificationForm() {
	const coinOptions = ["BTC", "ETH"];
	const percentageAmounts = ["3", "5", "10", "20"];
	const timeAmounts = [
		"5 minutes",
		"10 minutes",
		"15 minutes",
		"20 minutes",
		"30 minutes",
		"1 hour",
		"12 hours",
		"24 hours",
	];

	const handleSubmit = (e: SyntheticEvent) => {
		const target = e.target;

		createNotification(target[0].value, target[1].value, target[2].value);

		e.preventDefault();
	};

	return (
		<div className={styles.create_notification_form_wrapper}>
			<form
				className={styles.create_notification_form_inner}
				onSubmit={handleSubmit}
			>
				<label className={styles.friend_activity_name}>Notify me when:</label>
				<select className={styles.create_notification_form_coins}>
					{coinOptions.map((value, index) => (
						<option key={index} value={value}>
							{value}
						</option>
					))}
				</select>

				<label className={styles.friend_activity_name}>
					Increases/Decreases by:
				</label>
				<select className={styles.create_notification_form_coins}>
					{percentageAmounts.map((value, index) => (
						<option key={index} value={value}>
							{">= " + value}%
						</option>
					))}
				</select>

				<label className={styles.friend_activity_name}>In:</label>
				<select className={styles.create_notification_form_coins}>
					{timeAmounts.map((value, index) => (
						<option key={index} value={value}>
							{value}
						</option>
					))}
				</select>

				<input
					type="submit"
					value="Submit"
					className={styles.create_notification_form_coins}
				/>
			</form>
		</div>
	);
}

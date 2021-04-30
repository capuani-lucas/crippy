import styles from "../../../../styles/Dashboard.module.css";

export default function FriendList() {
	return (
		<div>
			<h3 className={styles.friend_activity_name}>My friends:</h3>

			<div className={styles.friend_list_wrapper}>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}>Test Name</div>
				<div className={styles.friend}></div>
			</div>
		</div>
	);
}

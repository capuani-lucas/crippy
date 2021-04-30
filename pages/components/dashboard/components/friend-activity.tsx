import styles from "../../../../styles/Dashboard.module.css";

interface TempData {
	name: string;
	action: string;
	type: string;
	amount: string;
}

export default function FriendActivity({ ...props }) {
	const temporaryData: TempData[] = [
		{
			name: "Test 1 2 3 4 5",
			action: "bought",
			type: "btc",
			amount: "0.1113144",
		},
		{
			name: "Hello there",
			action: "bought",
			type: "eth",
			amount: "1313.112",
		},
		{
			name: "Last test",
			action: "sold",
			type: "btc",
			amount: "1.223333",
		},
	];

	const classData = {
		btc: styles.btc,
		eth: styles.eth,
	};

	return (
		<>
			<h3 className={styles.friend_activity_header}>Friend's Activity</h3>

			{temporaryData.map((value, index) => {
				return (
					<div className={styles.friend_activity} key={index}>
						<div>
							<span className={styles.friend_activity_name}>
								{`${value.name} ${value.action} `}
							</span>
							<span className={classData[value.type]}>{`${
								value.amount
							}${value.type.toUpperCase()}`}</span>
						</div>
						<span className={styles.friend_activity_name}>Yesterday</span>
					</div>
				);
			})}

			{props.showMore && (
				<div className={styles.show_more_activity}>
					<span className={styles.friend_activity_name}>View More</span>
				</div>
			)}
		</>
	);
}

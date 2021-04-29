import useSWR from "swr";
import styles from "../../../../styles/Dashboard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank, faCoins } from "@fortawesome/free-solid-svg-icons";

export default function PriceView() {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	// const { data, error } = useSWR("https://api.shakepay.co/rates", fetcher);

	return (
		<>
			<h3 className={styles.friend_activity_name}>Coins</h3>

			<div className={styles.coin_view_wrapper}>
				<div className={styles.coin_view}>
					<span className={`${styles.coin_name} ${styles.btc}`}>
						Bitcoin (BTC)
					</span>

					<div className={styles.coin_left}>
						<div className={styles.coin_spaced}>
							<FontAwesomeIcon icon={faPiggyBank} size={"2x"} color={"gold"} />
							<span className={styles.coin_view_label}>
								{" "}
								$121212.00 CAD (0.000023)
							</span>
						</div>
						<div className={styles.coin_spaced}>
							<FontAwesomeIcon icon={faCoins} size={"2x"} color={"green"} />
							<span className={styles.coin_view_label}>$113102 CAD</span>
						</div>
					</div>
				</div>

				<div className={styles.coin_view}>
					<span className={`${styles.coin_name} ${styles.eth}`}>
						Ethereum (ETH)
					</span>

					<div className={styles.coin_left}>
						<div className={styles.coin_spaced}>
							<FontAwesomeIcon icon={faPiggyBank} size={"2x"} color={"gold"} />
							<span className={styles.coin_view_label}>
								{" "}
								$121212.00 CAD (0.000023)
							</span>
						</div>
						<div className={styles.coin_spaced}>
							<FontAwesomeIcon icon={faCoins} size={"2x"} color={"green"} />
							<span className={styles.coin_view_label}>$113102 CAD</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

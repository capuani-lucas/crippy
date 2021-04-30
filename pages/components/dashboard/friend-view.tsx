import FriendActivity from "./components/friend-activity";
import FriendList from "./components/friend-list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/Dashboard.module.css";

export default function FriendView() {
	return (
		<>
			<div className={styles.add_friend}>
				<FontAwesomeIcon icon={faUserPlus} size={"2x"} color={"black"} />
			</div>
			<FriendActivity showMore={true} />

			<FriendList />
		</>
	);
}

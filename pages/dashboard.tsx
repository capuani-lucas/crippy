import NavBar from "./components/global/nav-bar";
import styles from "../styles/Dashboard.module.css";

import TopBar from "./components/dashboard/top-bar";
import AddIntegration from "./components/dashboard/add-integration";

export default function Dashboard () {

    const noIntegrations = true;

    if (noIntegrations) {
        return (
            <div>
                <NavBar active="dashboard"></NavBar>
                <AddIntegration></AddIntegration>
            </div>
        )
    }

    return (
        <div>

            <div className={styles.wrapper}>
            </div>


        </div>
    )


}
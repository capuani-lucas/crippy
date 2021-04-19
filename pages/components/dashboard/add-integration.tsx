

import styles from "../../../styles/Dashboard.module.css";

export default function AddIntegration() {
  return (
    <div className={styles.add_integration}>
      <h1>Link Account</h1>
      <span className={styles.small_text}>Click one of the options below to begin</span>
      <br></br>
      <span className={styles.small_text}>You will be able to add more in your settings later</span>
      <div className={styles.add_integration_buttons}>
          <div className={styles.add_coinbase_button} onClick={() => location.href="/test"}>
                <span>COINBASE</span>
                <img src="https://cryptotesters-images.s3.eu-central-1.amazonaws.com/a98a3a73352540c99c29390710399e63ct_a5619750ff.png"></img>
          </div>
      </div>
    </div>
  );
}

import styles from "./styles.module.css";

import UserImage from "../../../assets/user.png";

const UserInfo = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user__img}>
        <img src={UserImage} alt="User" />
      </div>

      <div className={styles.user__info}>
        <span>User name</span>
        <span>User email</span>
      </div>
    </div>
  );
};

export default UserInfo;

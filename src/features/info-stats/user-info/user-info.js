import styles from "./styles.module.css";

import UserImage from "../../../assets/user.png";

const UserInfo = ({ name, email }) => {
  return (
    <div className={styles.user}>
      <div className={styles.user__img}>
        <img src={UserImage} alt="User" />
      </div>

      <div className={styles.user__info}>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserInfo;

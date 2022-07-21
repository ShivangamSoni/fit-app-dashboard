import styles from "./styles.module.css";

import Button from "../button/button";
import ICONS from "../icons/icons";
import abbreviateNumber from "../../utils/abbreviateNumber";

const Target = ({ value, handlePlus, handleMinus }) => {
  return (
    <div className={styles.target}>
      <div className={`${styles.target__btn} ${styles["target__btn--plus"]}`}>
        <Button onClick={handlePlus}>
          <ICONS.PlusIcon />
        </Button>
      </div>

      <div className={styles.target__info}>
        <span>{abbreviateNumber(value)}</span>
        <span>target</span>
      </div>

      <div className={`${styles.target__btn} ${styles["target__btn--minus"]}`}>
        <Button onClick={handleMinus}>
          <ICONS.MinusIcon />
        </Button>
      </div>
    </div>
  );
};

export default Target;

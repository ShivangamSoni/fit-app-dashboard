import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./styles.module.css";

import abbreviateNumber from "../../../utils/abbreviateNumber";

const StepsStats = ({ walked, target }) => {
  return (
    <div className={styles.steps}>
      <div className={styles.steps__bar}>
        <CircularProgressbarWithChildren
          value={walked}
          maxValue={target}
          styles={buildStyles({
            trailColor: "var(--text)",
            pathColor: "var(--accent-green)",
            rotation: 0.25,
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
          })}
        >
          <div className={styles.bar__info}>
            <span>{walked}</span>
            <span>walked</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className={styles.steps__target}>
        <span>{abbreviateNumber(target)}</span>
        <span>target</span>
      </div>
    </div>
  );
};

export default StepsStats;

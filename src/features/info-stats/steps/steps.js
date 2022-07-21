import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./styles.module.css";

const StepsStats = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.steps__bar}>
        <CircularProgressbarWithChildren
          value={2547}
          maxValue={4000}
          styles={buildStyles({
            trailColor: "#fff",
            pathColor: "var(--accent-green)",
            rotation: 0.25,
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
          })}
        >
          <div className={styles.bar__info}>
            <span>2547</span>
            <span>walked</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className={styles.steps__target}>
        <span>4K</span>
        <span>target</span>
      </div>
    </div>
  );
};

export default StepsStats;

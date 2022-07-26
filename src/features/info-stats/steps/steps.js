import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useUsersCtx } from "../../../context/UsersContext";

import styles from "./styles.module.css";

import Target from "../../../components/target/target";

const StepsStats = ({ userId, walked, target }) => {
  const { incrementSteps, decrementSteps } = useUsersCtx();

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

      <Target
        value={target}
        handlePlus={() => incrementSteps(userId)}
        handleMinus={() => decrementSteps(userId)}
      />
    </div>
  );
};

export default StepsStats;

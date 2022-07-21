import { PieChart } from "react-minimal-pie-chart";

import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

const NutritionStats = () => {
  return (
    <div className={styles.nutrition}>
      <div className={styles.nutrition__chart}>
        <PieChart
          data={[
            {
              title: "Protein",
              value: 1,
              color: "var(--accent-pink)",
            },
            {
              title: "Fats",
              value: 1,
              color: "var(--accent-yellow)",
            },
            {
              title: "Carbs",
              value: 1,
              color: "var(--accent-blue)",
            },
          ]}
          lineWidth={25}
          startAngle={-90}
        />
        <div className={styles.chart__info}>
          <span>2547</span>
          <span>calories</span>
        </div>
      </div>

      <div className={styles.nutrition__target}>
        <span>2.5K</span>
        <span>target</span>
      </div>

      <div className={styles.nutrition__btn}>
        <Button>
          <ICONS.ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default NutritionStats;

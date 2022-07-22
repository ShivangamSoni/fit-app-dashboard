import styles from "./styles.module.css";

import Stats from "./stat/stat";

const NutritionMacros = ({ stats }) => {
  return (
    <div className={styles.macro}>
      {stats.map((stat) => (
        <Stats key={stat.id} {...stat} />
      ))}
    </div>
  );
};

export default NutritionMacros;

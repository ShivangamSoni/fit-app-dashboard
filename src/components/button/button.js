import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ type, children, ...props }) => {
  // CustomLink & CustomButton are to be used for Custom Styling
  if (type === "link") {
    return (
      <Link className={`${styles.button} CustomLink`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.button} CustomButton`} {...props}>
      {children}
    </button>
  );
};

export default Button;

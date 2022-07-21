import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Button = ({ children, ...props }) => {
  // CustomLink & CustomButton are to be used for Custom Styling
  if (props.type === "link") {
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

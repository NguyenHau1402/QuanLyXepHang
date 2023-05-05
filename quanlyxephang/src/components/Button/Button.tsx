import React from "react";
import '../Button/Button.css'
type BtnProps = {
  text: string
  type: keyof typeof styles;
}

const styles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
}

const Button1 = (props: BtnProps) => {
  return (
    <button className={styles[props.type]}>
      <p className="button-color ">{props.text}</p>
    </button>
  );
};

export default Button1;
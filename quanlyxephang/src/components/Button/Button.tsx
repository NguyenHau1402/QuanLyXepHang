import React from "react";
import '../Button/Button.css'

type BtnProps = {
  text: string;
  type: keyof typeof styles;
  onClick?: () => void;
}

const styles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  add: "btn-add",
}

const Button1 = (props: BtnProps) => {
  const { text, type, onClick } = props; 
  return (
    <button className={styles[type]} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button1;

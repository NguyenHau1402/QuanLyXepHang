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
  add: "btn-add",
}

const Button1 = (props: BtnProps) => {
 
  
  return (
    <button className={styles[props.type]}>
      <p>{props.text}</p>
    </button>
  );
};

export default Button1;
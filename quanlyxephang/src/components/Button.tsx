import React from "react";
type btProps={
  text: string
}

const Button1 = (props: btProps) => {
  return (
    <button className="button-bg">
      <p className="button-color">{props.text}</p>
    </button>
  );
};

export default Button1;
import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  const text = props.text;
  const href = props.href;
  return (
    <Button
      className="border-0"
      style={{ backgroundColor: "#5CB85F" }}
      href={href}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

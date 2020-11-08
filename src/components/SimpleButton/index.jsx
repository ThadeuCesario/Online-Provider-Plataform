import React from "react";
import "./styles";

const SimpleButton = props => {
  const { title, action, styles: overrideStyles } = props;

  const styles = {
    Button: {
      padding: "12px",
      borderRadius: "4px",
      borderWidth: "0",
      boxShadow: "1px 1px 1px #9E9E9E",
      fontSize: "16px"
    }
  };

  return (
    <button
      onClick={action}
      style={{ ...styles.Button, ...overrideStyles }}
      className={"button"}
    >
      {title}
    </button>
  );
};

export default SimpleButton;

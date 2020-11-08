import React from "react";
import TextBlockStyled from "./styles";

const TextBlock = props => {
  const {
    image,
    altImg,
    titleImg,
    title,
    subtitle,
    styles: overrideStyles
  } = props;

  return (
    <TextBlockStyled style={{ ...overrideStyles }}>
      {image && (
        <img
          src={image}
          alt={altImg}
          title={titleImg}
          className="image-block"
        />
      )}
      <strong className="title">{title}</strong>
      <p className="subtitle">{subtitle}</p>
    </TextBlockStyled>
  );
};

export default TextBlock;

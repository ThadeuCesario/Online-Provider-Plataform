import React from "react";
import BannerStyled from "./styles";

const Banner = props => {
  const { image, alt, title } = props;

  return <BannerStyled src={image} alt={alt} title={title}/>;
};

export default Banner;

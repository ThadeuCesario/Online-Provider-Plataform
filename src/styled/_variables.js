const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};

export const device = {
  mobileSmall: `(max-width: ${size.mobileS})`,
  mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`
};

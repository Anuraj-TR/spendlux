const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const devices = {
  tablet: `(min-width : ${sizes.md})`,
  mobileTablet: `(max-width : ${sizes.lg})`,
  tabletPro: `(min-width: ${sizes.lg})`,
  desktop: `min-width: ${sizes.xl}`
};
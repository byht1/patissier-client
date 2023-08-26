export const Sizes = Object.freeze({
  mobile: 375,
  desktopDown: 1223.98,
  desktop: 1224,
});

export const devices = {
  mobile: `@media (min-width: ${Sizes.mobile}px)`,
  desktopDown: `@media (max-width: ${Sizes.desktopDown}px)`,
  desktop: `@media (min-width: ${Sizes.desktop}px)`,
};

export const SLOPES_BREAKPOINTS = {
  xlarge: 1130,
  large: 1024,
  medium: 620,
  small: 414,
};

export const getSlopesBreakpoint = windowWidth => {
  if (windowWidth > SLOPES_BREAKPOINTS.xlarge) {
    return 'xlarge';
  } else if (windowWidth > SLOPES_BREAKPOINTS.large) {
    return 'large';
  } else if (windowWidth > SLOPES_BREAKPOINTS.medium) {
    return 'medium';
  } else if (windowWidth > SLOPES_BREAKPOINTS.small) {
    return 'small';
  } else {
    return 'xsmall';
  }
};

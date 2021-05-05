import { createSelector } from "reselect";

export const getLogo = (state) => state.logo;

export const getLogoColor = createSelector(getLogo, (logo) => logo.color);

export const getAvailableColors = createSelector(
  getLogo,
  (logo) => logo.colors
);

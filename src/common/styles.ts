import { css } from "styled-components";

export const dropShadow = css`
  box-shadow: rgba(0, 0, 0, 0.04) 0 2px 10px 0;
`;

export const smoothBorder = css`
  border-radius: 0.75rem;
`;

export const horizontalMargin = css`
  margin-left: 16px;
  margin-right: 16px;
`;

export const verticalMargin = css`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const primaryTextSize = css`
  font-size: 18px;
`;

export const secondaryTextSize = css`
  font-size: 16px;
`;

export const tertiaryTextSize = css`
  font-size: 14px;
`;

export const primaryTextColor = css`
  color: #464d52;
`;

export const secondaryTextColor = css`
  color: #525a60;
`;

export const tertiaryTextColor = css`
  color: #748088;
`;

export const boldText = css`
  font-weight: bold;
`;

export const semiBoldText = css`
  font-weight: 600;
`;
export const titleText = css`
  ${boldText};
  ${primaryTextSize}
  ${primaryTextColor}
`;

export const primaryText = css`
  ${primaryTextSize}
  ${primaryTextColor}
`;

export const secondaryText = css`
  ${secondaryTextSize}
  ${secondaryTextColor}
`;

export const tertiaryText = css`
  ${tertiaryTextSize}
  ${tertiaryTextColor}
`;

export const whiteBackground = css`
  background: rgb(255, 255, 255);
`;

export const whiteAlphaBackground = css`
  background: rgb(255, 255, 255, 80%);
`;

export const nearWhiteBackground = css`
  background: rgb(242, 242, 247);
`;

export const nearWhiteAlphaBackground = css`
  background: rgb(242, 242, 247, 80%);
`;

export const nearGrayBackground = css`
  background: rgb(223, 223, 228);
`;

export const noListStyle = css`
  list-style-type: none;
  text-decoration: none;
`;

export const noTouchEffect = css`
  -webkit-tap-highlight-color: transparent;
`;

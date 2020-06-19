import { createGlobalStyle } from "styled-components"
import { breakpoint, device } from "config/responsive"

export const GlobalStyle = createGlobalStyle`
  /**  reset style  **/
  body {
    margin: 0;
    font-family: "Do Hyeon", "Spoqa Han Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    min-width: ${breakpoint.mobileS}px;
    width: 100%;
    overflow-x: hidden;
    line-height: 1;
  }

  body,
  body *,
  body::before,
  body::after,
  body *::before,
  body *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  img {
    vertical-align: middle;
  }

  button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    user-select: none;
    cursor: pointer;
    background: none;
    border: none;
  }

  abbr[title] {
    cursor: help;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  li {
    list-style: none;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    color: inherit;
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  /**  
   **  common style  
   **/

  #reactApp {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    align-items: stretch;
  }

  select {
    border-radius: 5px;
    background-color: ${({ theme }) => (theme.value === "dark" ? theme.bgColor2 : theme.bgColor)};
    color: ${({ theme }) => theme.textColor};
  }

 .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  }

  .resetBoxModel {
    margin: 0;
    border: 0;
    padding: 0;
  }

  .resetList {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }

  .noTextContent {
    display: inline-block;
    line-height: 0;
    margin: 0;
    padding: 0;
  }

  button:disabled {
    opacity: 0.3;
  }

  .dimmed {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  [class=alert] {
    white-space: nowrap;
		align-items: center;
		width: 90%;
		height: 2rem;
		font-size: 1rem;
    line-height: 2rem;
		margin: 1rem auto 0;
		color: red;
		text-indent: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		background-color: ${({ theme }) => theme.errorBgColor};
  }

  .highlight {
    background-color: ${({ theme }) => theme.highlight};
  }

  .ant-tooltip {
    max-width: 100%;
    .ant-tooltip-arrow-content {
      background-color: ${({ theme }) => theme.majorColor};
    }
    .ant-tooltip-inner {
      background-color: ${({ theme }) => theme.majorColor};
      color: #fff;
      white-space: nowrap;
    }
  }

  .ant-notification-notice {
    border: 1px solid ${({ theme }) => theme.textColor};
  }

  @media screen and ${device.laptop} {
    .mobileTabletOnly {
      display: none;
    }
    html {
      font-size: 18px;
    }
  }

  @media screen and ${device.mobileTabletOnly} {
    .mobileTabletOnly {
      display: block;
    }
  }

  @media screen and ${device.tabletOnly} {
    html {
      font-size: 16px;
    }
  }
  @media screen and ${device.mobileOnly} {
    html {
      font-size: 12px;
    }
  }
`

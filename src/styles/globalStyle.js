import { createGlobalStyle } from "styled-components"
import { device } from "config/responsive"

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
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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

  /**  common style  **/
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

  .landing {
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    margin: 0 auto;
    text-align: center;

    &.bg {
      color: #fff;
      min-height: 100vh;
      padding-top: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .title {
        font-size: 5rem;
      }

      .desc {
        font-size: 5rem;
        font-weight: bold;
        // text-shadow: 1px 1px 1px ${({ theme }) => theme.majorColor};
      }
    }
  }

  .contentWrap {
    margin: 0 auto;
    text-align: center;

    h2 {
      margin-top: 100px;
      margin-bottom: 60px;

      & + .desc {
        margin-bottom: 50px;
      }
    }
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
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

  [class*=alert],
  [class*=Alert] {
    color: red;
    white-space: nowrap;
  }

  div.inputField + div.inputField {
    margin-left: 20px;
  }

  @media screen and ${device.laptop} {
    body {
      font-size: 16px;
    }
    .contentWrap {
      padding-top: 100px;
      padding-bottom: 100px;

      h2 {
        margin-top: 100px;
        margin-bottom: 60px;
      }
    }
  }
  @media screen and ${device.tabletOnly} {
    body {
      font-size: 14px;
    }
    .contentWrap {
      padding-top: 50px;
      padding-bottom: 50px;

      h2 {
        margin-top: 50px;
        margin-bottom: 30px;
      }
    }
  }
  @media screen and ${device.mobileOnly} {
    body {
      font-size: 12px;
    }
    .contentWrap {
      padding-top: 40px;
      padding-bottom: 40px;

      h2 {
        margin-top: 40px;
        margin-bottom: 20px;
      }
    }
  }
`

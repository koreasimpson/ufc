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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .title {
        font-size: 4rem;
      }

      .desc {
        font-size: 3rem;
        font-weight: bold;
        text-shadow: 1px 1px 1px ${({ theme }) => theme.majorColor};
        padding: 0 10%;
      }
    }
  }

  .contentWrap {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 4rem;

    h2 {
      font-size: 3rem;
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
    html {
      font-size: 18px;
    }
    .contentWrap {
      padding-top: 100px;

      h2 {
        margin-top: 100px;
        margin-bottom: 60px;

        & + .desc {
          margin-bottom: 50px;
        }
      }
    }
  }

  @media screen and ${device.mobileTabletOnly} {
    .contentWrap {
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  @media screen and ${device.tabletOnly} {
    html {
      font-size: 16px;
    }
    .contentWrap {
      h2 {
        margin-top: 50px;
        margin-bottom: 30px;
        & + .desc {
          margin-bottom: 50px;
        }
      }
    }
  }
  @media screen and ${device.mobileOnly} {
    html {
      font-size: 12px;
    }
    .contentWrap {
      h2 {
        margin-top: 40px;
        margin-bottom: 20px;
        & + .desc {
          margin-bottom: 50px;
        }
      }
    }
  }
`

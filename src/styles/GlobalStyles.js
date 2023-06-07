// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Sans';
    src: url('/fonts/JosefinSans-VariableFont_wght.ttf');
  }

  :root {
    --color-bright-blue: ${({ theme }) => theme.colorBrightBlue};
    --gradient-primary: ${({ theme }) => theme.gradientPrimary};
    --color-bg: ${({ theme }) => theme.colorBg};
    --color-surface: ${({ theme }) => theme.colorSurface};
    --color-border: ${({ theme }) => theme.colorBorder};
    --color-text-active: ${({ theme }) => theme.colorTextActive};
    --color-text-completed: ${({ theme }) => theme.colorTextCompleted};
    --color-text-1: ${({ theme }) => theme.colorText1};
    --box-shadow: ${({ theme }) => theme.boxShadow};
  }

  html {
    position: relative;
    box-sizing: border-box;
    font-size: 50%;
    overflow-x: hidden;
    background-color: var(--color-bg);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background-position: bottom -1rem left -42rem, bottom -1rem right -42rem, top 360px right -20rem;
    background-repeat: no-repeat;
    background-size: 30rem, 30rem, 10rem;
    background-color: var(--color-bg);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.25rem;
    transition: background 1s;
    padding: 0 3rem;
    padding-top: 6rem;
  }

  #root {
    width: 100%;
    max-width: 67.5rem;
    margin: 0 auto;
  }

  .sr-only {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    white-space: nowrap;
    overflow: hidden;
  }

  *:focus {
    outline: 2px dotted var(--color-text-active);
  }
`;
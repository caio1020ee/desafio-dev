import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
  }

  html, body, #root {
    width: 100%;
    position: relative;
    background: var(--color-background);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  button, input, a {
    font-family: var(--fonts) !important;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    font-size: 16px;
    --fonts: 'Poppins', sans-serif;
    --transition: 0.5s ease-in-out;
    --border-radius: 10px;

    --color-primary: #4d5bf9;
    --color-primary-dark: #03045e;
    --color-secondary: #0096c7;
    --color-secondary-dark: #0077b6;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ThinItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraLight.ttf')
      format('truetype');
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraLightItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-LightItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Italic.ttf') format('truetype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-MediumItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-SemiBoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-BoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-ExtraBoldItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins/Poppins-BlackItalic.ttf')
      format('truetype');
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }

`;

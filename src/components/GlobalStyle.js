// import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          --black: #000000;
          --grey: #777777;
          --bg-grey: #f5e7e7;
          --bleu: #3620b1;
        }
        body {
          color: var(--black);
          font-weight: normal;
          font-size: 20px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        a:focus {
          outline: none;
        }
        button {
          display: block;
          margin: 0 auto;
          cursor: pointer;
          border: none;
        }
        button:focus {
          outline: none;
        }
      `}
    />
  );
};
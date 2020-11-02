import { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Link = styled.a`
  color: #61dafb;
`;

const bright = {
  backgroundColor: '#DDD',
  primaryColor: '#000',
};

const dark = {
  backgroundColor: '#333',
  primaryColor: '#fff',
};

function App() {
  const [theme, setTheme] = useState(bright);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <button
          type="button"
          onClick={() => setTheme(theme === bright ? dark : bright)}
        >
          Change Theme
        </button>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

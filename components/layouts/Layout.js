import React from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { lightTheme, darkTheme } from '../../contants/theme';
import { GlobalStyles } from '../../contants//global';

const Wrapper = styled.div`
`;
const Content = styled.div`
`;

function Component(props) {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <GlobalStyles/>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content>{props.children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Component;

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Container from './components/Container';
import Title from './components/Title';
import QuestionAccordionList from './components/QuestionAccordionList';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.font.familyPrimary};
    color: ${({ theme }) => theme.colors.text};
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Title>
          FAQs<span className="sr-only"> (Frequently Asked Questions)</span>
        </Title>
        <QuestionAccordionList />
      </Container>
    </ThemeProvider>
  );
}

export default App;

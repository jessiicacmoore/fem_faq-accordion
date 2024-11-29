import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';
import Container from '@/components/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Hello world</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;

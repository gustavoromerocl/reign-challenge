import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import theme, { GlobalStyles } from './theme';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <AppRoutes/>
            </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;

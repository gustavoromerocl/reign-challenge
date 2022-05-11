import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import theme, { GlobalStyles } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppRoutes/>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;

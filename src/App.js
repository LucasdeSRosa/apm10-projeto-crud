import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";
import { TemporaryDrawer } from "./pages/login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff6d00',
      main: '#ff6d00',
      dark: '#00695c',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#00695c',
      contrastText: '#000',
    },
    third: {
      light: '#5fba7d',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
      <Login />
      <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;

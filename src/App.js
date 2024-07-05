import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import ThemeProvider from "./theme";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;

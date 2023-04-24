import { ThemeProvider } from "styled-components/native";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/> 
    </ThemeProvider>
  );
}

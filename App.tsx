import { ThemeProvider } from "styled-components/native";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}

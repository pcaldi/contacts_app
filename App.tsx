import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold
} from "@expo-google-fonts/ubuntu"

import { Home } from "@/app/home"
import { Loading } from "@/components/loading";
import { StatusBar } from "react-native";


export default function App() {
  const [fontsLoading] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoading) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Home />
    </GestureHandlerRootView>

  );
}


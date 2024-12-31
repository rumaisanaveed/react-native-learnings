import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // getting the color scheme
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     {/* it represents the header */}
    //     {/* headerShown : true or false hides or shows the header */}
    //     {/* <Stack.Screen name="index" options={{ title: "Home" }} />
    // <Stack.Screen name="contact" options={{ title: "Contact Us" }} /> */}
    //     {/* we don't wanna have the header inside the coffee group */}
    //     {/* <Stack.Screen
    //   name="(coffee)"
    //   options={{
    //     headerShown: false,
    //   }}
    // /> */}
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </>
    // stack is used for manage navigation in app where the screens are stacked on top of one another
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.headerBackground,
        },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      {/* These are the screens */}
      {/* we won't be able to see header on the home screen, whatever title we'll give here
      will appear in the screen's header */}
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: true,
          headerTitle: "Coffee Shop Menu",
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          title: "Contact",
          headerShown: true,
          headerTitle: "Contact Us",
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

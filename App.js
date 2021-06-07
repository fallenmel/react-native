import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";

// screens
import Home from "./screens/home";
import PawnNavigation from "./navigation/pawn.stack";
import Menu from "./screens/menu";

// configs
import { colors } from "./config/color";

// components
import PawnNowIcoBtn from "./components/pawnNowIcoBtn";
import HomeIcoBtn from "./components/homeIcoBtn";
import MenuIcoBtn from "./components/menuIcoBtn";
import { Provider } from "react-redux";
import configureStore from "./store";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, fontsLoadedHandler] = useState(false);
  const tabBarOptions = {
    labelStyle: {
      fontSize: 10,
      color: colors.darkBlue,
      fontFamily: "SFProText-bold",
    },
    style: {
      height: 72,
    },
    // showLabel: false,
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      SFProText: require("./assets/fonts/SFProText-Regular.ttf"),

      // // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "SFProText-bold": {
        uri: require("./assets/fonts/SFProText-Bold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "SFProText-bold-italic": {
        uri: require("./assets/fonts/SFProText-BoldItalic.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "SFProText-italic": {
        uri: require("./assets/fonts/SFProText-RegularItalic.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    fontsLoadedHandler(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        {fontsLoaded && (
          <>
            <NavigationContainer>
              <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    tabBarIcon: (props) => <HomeIcoBtn {...props} />,
                  }}
                />
                <Tab.Screen
                  name="Pawn"
                  component={PawnNavigation}
                  options={{
                    tabBarIcon: (props) => <PawnNowIcoBtn {...props} />,
                    // tabBarBadge: 3,
                    tabBarLabel: "Pawn Now",
                  }}
                />
                <Tab.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                    tabBarIcon: (props) => <MenuIcoBtn {...props} />,
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </>
        )}
      </Provider>
    </>
  );
}

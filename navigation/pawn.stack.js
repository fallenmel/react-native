import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import PawnCategory from "../screens/pawn/category";
import PawnBrand from "../screens/pawn/brand";

const Stack = createStackNavigator();

const PawnNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Category" component={PawnCategory} />
      <Stack.Screen name="Brand" component={PawnBrand} />
    </Stack.Navigator>
  );
};

export default PawnNavigation;

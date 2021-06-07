import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

const Menu = () => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <Text>This is the Menu</Text>
      </SafeAreaView>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

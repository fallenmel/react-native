import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import pawnheroLogo from "../assets/pawnhero-logo.png";
import { colors } from "../config/color";

const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: colors.lightBlue,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Image
            source={pawnheroLogo}
            style={{
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.container}>
          <Text>This is the home</Text>
          <Button
            title="Test"
            color="red"
            onPress={() => {
              navigation.navigate("Pawn");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

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

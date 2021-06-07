import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

const PawnCategory = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>This is the PawnCategory</Text>
          <Button
            title="Test"
            color="red"
            onPress={() => {
              navigation.navigate("Brand");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PawnCategory;

import React from "react";
import { Image } from "react-native";

import homeIco from "../assets/home-ico.png";
import homeIcoActive from "../assets/home-ico-active.png";

const HomeIcoBtn = (props) => {
  const { focused } = props;
  return (
    <>
      {focused ? <Image source={homeIcoActive} /> : <Image source={homeIco} />}
    </>
  );
};

export default HomeIcoBtn;

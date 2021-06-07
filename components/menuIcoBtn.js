import React from "react";
import { Image } from "react-native";

import menuIco from "../assets/menu-ico.png";
import menuIcoActive from "../assets/menu-ico-active.png";

const MenuIcoBtn = (props) => {
  const { focused } = props;

  return (
    <>
      {focused ? <Image source={menuIcoActive} /> : <Image source={menuIco} />}
    </>
  );
};

export default MenuIcoBtn;

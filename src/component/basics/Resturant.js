import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";

const uniqueList = [
  /* spread operator (...)*/
  ...new Set(
    /*gettinng data in array so using set method */ Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];

const Resturant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filterItem = (category) => {
    if (category == "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return (
        curElem.category == category
      ); /** Destructuring to avoid repataion*/
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;

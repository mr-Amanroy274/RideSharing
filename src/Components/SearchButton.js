import { faMultiply, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const SearchButton = ({ displaySearchContainer, searchContainerState }) => {
  const [style, setStyle] = useState({
    borderRadius: 10,
    right: 20,
    bottom: 20,
    icon: faSearch,
    backgroundColor: "cyan",
  });

  const changePosition = () => {
    if (style.bottom === 166) {
      setStyle({
        borderRadius: 10,
        bottom: 20,
        right: 20,
        icon: faSearch,
        backgroundColor: "cyan",
      });
    } else {
      (style.bottom = 166), (style.borderRadius = 0), (style.right = 0);
      setStyle({
        borderRadius: 3,
        bottom: 166,
        right: 0,
        icon: faMultiply,
        backgroundColor: "red",
      });
    }
  };

  const handlePress = () => {
    if (searchContainerState) {
      displaySearchContainer(false);
    } else {
      displaySearchContainer(true);
    }
    changePosition();
  };

  const styles = StyleSheet.create({
    searchIcon: {
      padding: 10,
      position: "absolute",
      backgroundColor: style.backgroundColor,
      borderRadius: style.borderRadius, // 10, 0
      right: style.right, // 20, 0
      bottom: style.bottom, // 20, 1660
    },
  });

  return (
    <TouchableOpacity style={styles.searchIcon} onPress={handlePress}>
      <FontAwesomeIcon icon={style.icon} size={25} />
    </TouchableOpacity>
  );
};

export default SearchButton;

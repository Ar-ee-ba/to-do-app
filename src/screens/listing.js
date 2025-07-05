import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function Listing() {
  const data = [
    require("../../assets/pic1.jpg"),
    require("../../assets/pic2.jpg"),
    require("../../assets/pic3.jpg"),
    require("../../assets/pic4.jpg"),
    require("../../assets/puc5.jpg"),
  ];

  return (
    <ScrollView>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        {data.map((img, item) => (
          <Image style={styles.img} source={img} />
        ))}
      </ScrollView>

      <Text style={styles.textStyle}>Related Flower Baskets</Text>

      {data.map((img, item) => (
        <Image style={styles.img} source={img} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
});

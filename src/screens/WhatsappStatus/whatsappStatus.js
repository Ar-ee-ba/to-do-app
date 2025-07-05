import { View, Text, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ionicon from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import Fontisto from "@expo/vector-icons/Fontisto";
import { IconContainer } from "../../components/iconContainer";
export default function WhatsappStatus() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const _renderStatus = (item) => {
    return (
      <View style={styles.statusContainer}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.header}>
        <IconContainer
          icon={
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          }
        />

        <Text style={styles.headerText}>Updates</Text>

        <View style={styles.statusListing}>
          <View style={styles.statusListingHeading}>
            <Text style={styles.headerSubText}>Status</Text>

            <View style={styles.headerSubIconContainer}>
              <IconContainer
                icon={<Ionicons name="camera" size={24} color="black" />}
              />
              <IconContainer
                icon={<Ionicon name="pencil" size={24} color="black" />}
              />
            </View>
          </View>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({ item }) => _renderStatus(item)}
          />
        </View>
      </View>
    </View>
  );
}

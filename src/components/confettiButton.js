import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Button } from "./button";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiButton() {
  const confettiRef = useRef();
  const boxRef = useRef();

  function onStartPressed() {
    if (confettiRef) {
      confettiRef.current.start();
    }
  }
  function onResumePressed() {
    if (confettiRef) {
      confettiRef.current.resume();
    }
  }
  function onStopPressed() {
    if (confettiRef) {
      confettiRef.current.stop();
    }
  }
  return (
    <View ref={boxRef}>
      <Button onPress={onStartPressed} title="Press me for Start" />
      <ConfettiCannon ref={confettiRef} count={200} origin={{ x: -10, y: 0 }} />
      <Button onPress={onResumePressed} title="Press me for Resume" />
      <Button onPress={onStopPressed} title="Press me for Stop" />
    </View>
  );
}

const styles = StyleSheet.create({});

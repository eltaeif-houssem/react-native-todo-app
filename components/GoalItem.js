import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ data, onDeleteGoal }) => {
  const deleteGoalHandler = () => {
    onDeleteGoal(data.id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#210644",
        }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 7,
    color: "#fff",
  },
});

export default GoalItem;

import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  Modal,
  Image,
} from "react-native";

// import assets
import LogoImg from "../assets/images/logo.png";

const GoalInput = ({ onAddGoal, visibility, onCancel }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    Keyboard.dismiss();
    onCancel();
    if (!goal) {
      return;
    }
    onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={LogoImg} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => onCancel()} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;

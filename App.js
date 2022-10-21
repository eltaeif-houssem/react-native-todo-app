import { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
// import components
import { GoalInput, GoalItem } from "./components";
const App = () => {
  // define states
  const [visibility, setVisibility] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddGoalHandler = () => {
    setVisibility(true);
  };

  const endAddGoalHandler = () => {
    setVisibility(false);
  };

  // handle the add a new goal
  const addGoalHandler = (text) => {
    setGoals((state) => [
      ...state,
      {
        text,
        id: Math.random().toString(),
      },
    ]);
  };
  // handle the deleteion of the item
  const deleteGoalHandler = (goalId) => {
    setGoals((state) => {
      return state.filter((item) => item.id !== goalId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          visibility={visibility}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  data={itemData.item}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, key) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});

export default App;

/******************************************V1****************************************************/

// const App = () => {
//   const [goals, setGoals] = useState([]);
//   const [goal, setGoal] = useState("");

//   // handle the text input change
//   const goalInputHandler = (text) => {
//     setGoal(text);
//   };

//   // handle the add a new goal
//   const addGoalHandler = () => {
//     setGoals((state) => [
//       ...state,
//       {
//         text: goal,
//         key: Math.random().toString(),
//       },
//     ]);
//     setGoal("");
//   };
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your course goal!"
//           onChangeText={goalInputHandler}
//           value={goal}
//         />
//         <Button title="Add Goal" onPress={addGoalHandler} />
//       </View>

//       <View style={styles.goalsContainer}>
//         <FlatList
//           data={goals}
//           renderItem={(itemData) => {
//             return (
//               <View style={styles.goalItem}>
//                 <Text style={styles.goalText}>{itemData.item.text}</Text>
//               </View>
//             );
//           }}
//           alwaysBounceVertical={false}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },

//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#cccccc",
//   },

//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "70%",
//     marginRight: 8,
//     padding: 8,
//   },

//   goalsContainer: {
//     flex: 5,
//   },

//   goalItem: {
//     margin: 8,
//     padding: 7,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//   },

//   goalText: {
//     color: "#fff",
//   },
// });

// export default App;

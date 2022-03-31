import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function DreamInput(props) {
  const [setDream, setInputDream] = useState("");

  function dreamInputHandler(inputDream) {
    setInputDream(inputDream);
  }

  function addDreamHandler() {
    props.onAddDream(setDream);
    setInputDream("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/image.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="                       Input your dream!"
          onChangeText={dreamInputHandler}
          value={setDream}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#CF0000" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Dream"
              onPress={addDreamHandler}
              color="#890596"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default DreamInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#A03C78",
    width: "80%",
    color: "black",
    borderRadius: 6,
    padding: 8,
    marginTop: 10,
    backgroundColor: "#D3F4FF",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#93D9A3",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

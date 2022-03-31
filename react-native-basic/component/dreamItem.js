import { StyleSheet, View, Text, Pressable } from "react-native";

function DreamItem(props) {
  return (
    <View style={styles.dreamItemStyle}>
      <Pressable
        android_ripple={{ color: "#dddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.dreamText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default DreamItem;

const styles = StyleSheet.create({
  dreamItemStyle: {
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: "#A03C78",
  },
  dreamText: {
    color: "white",
    padding: 8,
  },
});

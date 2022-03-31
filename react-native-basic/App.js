import { useState } from "react";
import { Button, FlatList, StyleSheet, View, StatusBar } from "react-native";

import DreamItem from "./component/dreamItem";
import DreamInput from "./component/dreamInput";

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false);
  const [listDream, updateListDream] = useState([]);

  function startDreamHandler() {
    setModalVisible(true);
  }

  function addDreamHandler(setDream) {
    updateListDream((currentListDream) => [
      ...currentListDream,
      { text: setDream, id: Math.random().toString() },
    ]);
    endAddDreamHandler();
  }

  function endAddDreamHandler() {
    setModalVisible(false);
  }

  function deleteDreamHandler(id) {
    updateListDream((currentListDream) => {
      return currentListDream.filter((dream) => dream.id !== id);
    });
  }

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          onPress={startDreamHandler}
          title="Add New Dream"
          color="#A03C78"
        />

        <DreamInput
          visible={modalIsVisible}
          onAddDream={addDreamHandler}
          onCancel={endAddDreamHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={listDream}
            renderItem={(itemData) => {
              itemData.index;
              return (
                <DreamItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteDreamHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
    backgroundColor: "#93D9A3",
  },

  goalsContainer: {
    flex: 4,
  },
  dreamText: {},
});

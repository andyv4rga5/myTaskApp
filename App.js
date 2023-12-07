import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react";

import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';
import CustomList from './components/CustomList';

export default function App() {
  const [textItem, setTextIem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [isChecked, setIsChecked] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextIem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
    setTextIem('')
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setModalVisible(!modalVisible)
  }
  
  const renderListItem = ({ item }) => {
    return (
      <View style={styles.itemList}>
        <Text>{item.value}</Text>
        <Button
          title='x'
          color="#FF6B6B"
          onPress={() => onSelectItemHandler(item.id)}
        >
        </Button>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <CustomInput
          placeholderProp="Ingresar Tarea"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <CustomList
          itemListProp={itemList}
          renderListItemEvent={renderListItem}
        />
      </View>
      <CustomModal
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECEF',
    padding: 70,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    backgroundColor: '#F7FFF7',
    borderRadius: 10,
  },
});
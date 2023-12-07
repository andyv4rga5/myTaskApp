import { View, Text, Modal, StyleSheet, Button } from "react-native"

const CustomModal = (
    {
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }) => {

    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={ModalStyle.modalEliminar}>
                <View style={newStyles.modalMessageContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Se Eliminara: </Text>
                    <Text style={TextosItem.borderBottomText}>{itemSelectedProp.value} </Text>
                </View>
                <View style={newStyles.modalButtonContainer}>
                    <Button title='Cancelar' color="#292F36" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
                    <Button title='Eliminar' color="#FF6B6B" onPress={onDeleteItemHandlerEvent} />
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const newStyles = StyleSheet.create({
    modalMessageContainer: {
        marginTop: 150,
        alignItems: "center"
    },
    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20,
        marginBottom: 150,
    },
});

const ModalStyle = StyleSheet.create({
    modalEliminar: {
        marginTop: 160,
        backgroundColor: "#E5ECF4"
    }
});

const TextosItem = StyleSheet.create({
    borderBottomText:{
        marginVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    }
});
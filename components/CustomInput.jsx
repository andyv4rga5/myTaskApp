import { View, TextInput, Button, StyleSheet } from "react-native"

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandlerEvent,
        addItemToListEvent
    }
) => {
    return (
        <View style={styles.textosContenedor} >
            <TextInput
                style={styles.Textos}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <Button
                title=" Add "
                color="#5FB49C"
                onPress={addItemToListEvent}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7ECEF',
        padding: 70,
    },
    Textos: {
        color: '#000000',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginRight: 20,
        width: 150,
    },
    textosContenedor: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
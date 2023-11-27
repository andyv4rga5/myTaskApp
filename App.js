import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textosContenedor} >
        <TextInput style={styles.Textos} placeholder="Ingresar tarea"/>
        <Button title=" Add " color="#0F7173"/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECEF',
    padding:70,
  },

  Textos:{
    color: '#ffff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginRight: 20,
    width: 150,
  },

  textosContenedor:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

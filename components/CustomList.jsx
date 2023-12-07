import { FlatList } from "react-native"
const CustomList = (
    {
        itemListProp,
        renderListItemEvent
    }
) =>{
    return (
        <FlatList
          data={itemListProp}
          renderItem={renderListItemEvent}
          keyExtractor={item => item.id}
        />
    )
}

export default CustomList 
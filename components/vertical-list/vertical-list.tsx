import { FlatListProps,  StyleSheet } from "react-native";
import { FlatList } from "react-native";

interface UiVerticalListProps extends FlatListProps<any>{
  numberOfCols?: number;
  data: any[];
  renderItem: (item: any) => React.ReactElement;
}

function UiVerticalList({
  data,
  renderItem,
  numberOfCols,
  ...flatListProps
}: UiVerticalListProps) {
  return (
    // data.map(item => renderItem(item))
    <FlatList
      data={[...data]}
      numColumns={numberOfCols}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => renderItem(item)}
      {...flatListProps}
    />
  );
}



export default UiVerticalList;

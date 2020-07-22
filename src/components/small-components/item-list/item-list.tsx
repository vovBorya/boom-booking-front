import React from "react";
import {View} from "react-native";

type ItemListProps = {
  style?: any
  data: []
  renderItem: (item: any) => any
  horizontal?: boolean
}

const ItemList: React.FC<ItemListProps> = ({ data, renderItem, horizontal= false, style }) => {

  const items = data.map(item => renderItem(item));

  return(
    <View style={ [style ,{ flexDirection: horizontal ? "row" : "column" }] }>
      {items}
    </View>
  );

};

export default ItemList;
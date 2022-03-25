import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';


function User({ navigation, user }){
    
   
    const data = [
          { id: "00", name: "Relâmpago McQueen" },
          { id: "01", name: "Agente Tom Mate" },
          { id: "02", name: "Doc Hudson" },
          { id: "03", name: "Cruz Ramirez" }
        ]

  
    const columns = 3;
        return (
          <SafeAreaView>
            <FlatList
              data={createRows(data, columns)}
              keyExtractor={item => item.id}
              numColumns={columns}
              renderItem={({ item }) => {
                if (item.empty) {
                  return <View style={[styles.item, styles.itemEmpty]} />;
                }
                return (
                  <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        );
      
    }
    
    function createRows(data, columns) {
      const rows = Math.floor(data.length / columns);
      let lastRowElements = data.length - rows * columns;
    
      while (lastRowElements !== columns) {
        data.push({
          id: `empty-${lastRowElements}`,
          name: `empty-${lastRowElements}`,
          empty: true
        });
        lastRowElements += 1;
      }
    
      return data;
    }
    
    const styles = StyleSheet.create({
      item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexBasis: 0,
        flexGrow: 1,
        margin: 4,
        padding: 20
      },
      itemEmpty: {
        backgroundColor: "transparent"
      },
      text: {
        color: "#333333"
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });




export default User

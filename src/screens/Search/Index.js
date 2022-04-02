import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';


function Search(){

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    setPosts([
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ])

  },[])
  
  function checkIndex(index){

    if(index === 2){
      return true
    }

    if(index % 18 === 0){
      return false
    }

    if(index % 18 === 1){
      return true
    }

    if(index % 9 === 0 && index !== 0){

      return true
    }
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


  return (
    <SafeAreaView>
      <ScrollView style={styles.screenContainer}>

        <View style={styles.topBarSearch}>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="search1" size={20} color="#fff" />
            </View>

            <TextInput 
              style={styles.input}
              value={search}
              onChange={(e) => {setSearch(e.target.value)}}
              placeholder="Pesquisar" 
              style={{
                  color:'#fff',
                  background:'inherit',
                  border:'0px',
                  outline: 'none',
                  fontSize: 15,
                  width: '82%',
              }} 
            />
          </View>

        </View>

        <View>
          <FlatList
            data={createRows(posts, 3)}
            keyExtractor={item => item.id}
            numColumns={3}
            renderItem={({ item, index }) => {
              if (item.empty) {
                return <View key={index} style={[styles.post, styles.postEmpty]} />;
              }
              

              return (
                <View key={index} style={checkIndex(index) ? styles.post : styles.bigPost}>
                  <Image esizeMode="cover" style={styles.postImage} source={require('./../../../assets/profile.jpg')} />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  screenContainer:{
    backgroundColor: '#000',
  },

  textWhite:{
    color:'#FFF',
    fontWeight: 'bold',
  },

  topBarSearch:{
    height: 90,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },

  post: {
    alignItems: "center",
    flexGrow: 1,
    margin: 2,
    flexBasis: 0,
  },

  bigPost:{
    alignItems: "center",
    flexGrow: 1,
    margin: 2,
    flexBasis: 0,
  },

  postImage:{
    height: 150,
    width: '100%'
  },

  text: {
    color: "#333333"
  },

  postEmpty: {
    backgroundColor: "transparent"
  },

  inputContainer:{
    flexDirection: 'row',
    backgroundColor: '#404040',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: 12,
    alignContent: 'center'
  },

  input:{
    fontSize: 20,
    color: '#fff'
  }, 

  iconContainer:{
    justifyContent: 'center',
    width: 30
  }

});

export default Search
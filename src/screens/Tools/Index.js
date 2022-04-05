import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import React from 'react'

import { Feather, MaterialIcons, Ionicons} from '@expo/vector-icons'; 


const Index = () => {
  return (
    <SafeAreaView style={styles.theme} > 

        <View style={styles.cardWarning}>
          <View  style={styles.cardHeader}>
            <View>
              <Text style={styles.cardHeaderText} >Expanda sua marca no Instagram</Text>
            </View>

            <View style={styles.cardTop} >
              <Ionicons name="close" size={32} color="#fff" />
            </View>
          </View>
          
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText} >Promova uma publicação ou um story para aumentar o engajamento e mostrar sua marca para mais pessoas.</Text>
          </View>
          
          <TouchableOpacity style={styles.actionButton} >
            <Text style={styles.actionButtonText} >Promover</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.createContainer} >
            <TouchableOpacity style={styles.createHeader} >
              <Text style={styles.textTitle} >Criar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promoteButton}>
              <View>
                <Image style={styles.imagePost} source={require('./../../../assets/2.jpeg')} />
              </View>

              <View style={styles.promoteMid} >
                <Text style={styles.promoteTitle} >Promover publicação popular</Text>
                <Text style={styles.promoteBody} >Encontre um público maior para essa publicação de alto engajamento.</Text>
              </View>

              <View>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} >
              <View>
                <Text style={styles.textTitle} >Escolher uma publicação</Text>
              </View>

              <View>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.section}>
              <Text style={styles.textTitle} >Gerenciar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottomSection}>
              <Text style={styles.bottomSectionTitle} >Você não tem anúncios</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({

  textWhite:{
    color: '#fff'
  },

  theme:{
    backgroundColor: '#000',
    height: '100%',
    alignItems: 'center'
  },

  cardWarning:{
    backgroundColor: '#404040',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 30,
    paddingVertical: 20,
    paddingTop: 10,
    width: '100%'

  }, 

  cardTop:{
    width: '100%',
    alignItems:'flex-end'
  },

  actionButton:{
    backgroundColor: '#458eff',
    width: '100%',
    alignItems: 'center',
    padding: 6,
    borderRadius:5
  },

  actionButtonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  cardBody:{
    marginBottom: 15
  },

  cardBodyText:{
    color: '#dedede',
    fontSize: 16,
    textAlign: 'center'
  },

  cardHeader:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%'
  
  },

  cardHeaderText:{
    color: '#fff',
    fontSize: 17, 
    fontWeight: 'bold'
  },  
  
  imagePost:{
    height: 70,
    width: 70,
    borderRadius: 5
  },

  promoteMid:{
    width: '70%',
    marginLeft: 12
  },

  promoteButton:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  promoteTitle:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

  promoteBody:{
    color: '#dedede',
    lineHeight: 20, 
    width: '70%'
  },

  textTitle:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },

  section:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30

  },

  bottomSectionTitle:{
    color: '#dedede',
    fontWeight: 'bold'
  },

  createHeader:{
    marginBottom: 30
  },

  createContainer:{
    borderWidth: 1,
    borderLeftWidth: 1.7,
    borderRightWidth: 1.7,
    borderTopWidth: 0,
    borderColor: '#404040',
    height: 'auto',
    justifyContent: 'space-between',
    padding: 20,
    flexGrow: 2,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }

});
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';


const Index = () => {
  return (
    <SafeAreaView style={styles.theme} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.timeHeader}>
          <TouchableOpacity style={styles.timeSelector}>
            <Text style={styles.timeSelectorText}>Últimos 7 dias</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </TouchableOpacity>

          <View>
            <Text style={styles.timeSelectorValue}>21 mar - 27 mar</Text>
          </View>
        </View>

        <View style={styles.resumeContainer} >
          <View style={styles.resumeLegendContainer}>
            <Text style={styles.resumeTitle}>Visão geral dos insights</Text>
            <Text style={styles.resumeLegend}>Você ganhou mais <Text style={styles.positive}>2</Text> seguidores em comparação com 14 mar - 20 mar.</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.indicatorResume}>
              <View>
                <Text style={styles.indicatorResumeText}>Contas alcançadas</Text>
              </View>

              <View style={styles.leftBox}>
                <View>
                  <Text style={styles.indicatorResumeTextData}>14</Text>
                  <Text style={styles.indicatorResumeTextPercentage}>-92,4%</Text>
                </View>

                <View style={styles.iconContainer}>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.indicatorResume}>  
              <View>
                <Text style={styles.indicatorResumeText}>Contas com engajamento</Text>
              </View>

              <View style={styles.leftBox}>
                <View>
                  <Text style={styles.indicatorResumeTextData}>0</Text>
                  <Text style={styles.indicatorResumeTextPercentage}>-100%</Text>
                </View>

                <View  style={styles.iconContainer}>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.indicatorResume}>  
              <View>
                <Text style={styles.indicatorResumeText}>Total de seguidores</Text>
              </View>
              
              <View style={styles.leftBox}>
                <View>
                  <Text style={styles.indicatorResumeTextData}>288</Text>
                  <Text style={styles.indicatorResumeTextPercentagePositive}>+0,6%</Text>
                </View>

                <View  style={styles.iconContainer}>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </View>
              </View>
            </TouchableOpacity>


          </View>
        </View>


        
        <View style={styles.categoriesResumes}>
            <View  style={styles.sectionTitle}> 
              <Text style={styles.sectionTitleText}>Contéudo que você compartilhou</Text>
            </View>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Publique fotos ou vídeos para ver nossos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Criar publicação</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Adicione fotos ou vídeos ao sey story para ver novos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Criar story</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Compartilhe vídeos do Reels para ver novos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Criar vídeo do Reels</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Adicione vídeos pra ver novos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Criar vídeo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Compartilhe um vídeo ao vivo para ver novos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Transmitir ao vivo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryResume} >
              <View style={styles.categoryResumeLabel}>
                <Text style={styles.categoryResumeLabelText}>Turbine uma publicação ou story para ver novos insights.</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </View>

              <View>
                <Text style={styles.addLink}>Criar promoção</Text>
              </View>
            </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({

  colorWhite:{
    color:"#fff"
  },

  theme:{
    backgroundColor: '#000'
  },

  timeHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomColor: '#404040'
  },

  timeSelector:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#404040',
    borderWidth: 1,
    paddingVertical: 7,
    borderRadius: 5,
    paddingHorizontal: 20
  },

  timeSelectorValue:{
    color:"#fff",
    fontSize: 17, 
    fontWeight:'bold'
  },

  timeSelectorText:{
    color:"#fff",
    fontSize: 17,
    fontWeight:'bold'
  },

  resumeTitle:{
    color:"#fff",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20

  },  

  resumeLegend:{
    color:"#404040",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    width: '90%'

  },

  resumeContainer:{
    borderBottomWidth: 5,
    borderBottomColor: '#404040',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
   
  resumeLegendContainer:{
    alignItems:'center',
    marginBottom: 30
  },

  indicatorResume:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },

  categoryResumeLabel:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13
  }, 

  categoryResumeLabelText:{
    color: '#404040', 
    width: '90%',
    fontWeight: 'bold',
    fontSize: 16
  },

  leftBox:{
    flexDirection: 'row'
  },

  addLink:{
    color: '#458eff',
    fontWeight: 'bold'
  },

  sectionTitleText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },

  sectionTitle:{
    marginBottom: 40
  },

  categoryResume:{
    marginBottom: 35
  },

  categoriesResumes:{
    paddingVertical: 30,
    paddingHorizontal: 20, 
  }, 

  indicatorResumeText:{
    fontSize: 16,
    color: '#fff'

  },

  indicatorResumeTextData:{
    color: '#fff',
    textAlign: 'right',
    fontSize: 16

  },

  indicatorResumeTextPercentage:{
    color: '#404040',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold'

  },

  indicatorResumeTextPercentagePositive:{
    color: '#0E8C20',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold'
  },

  iconContainer:{
    justifyContent:'center'
  },

  positive:{
    color: '#0E8C20'
  }


})
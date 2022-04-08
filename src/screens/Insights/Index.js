import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';


const Index = () => {
  return (
    <Theme>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TimeHeader>
          <TimeSelector>
            <TimeSelectorText>Últimos 7 dias</TimeSelectorText>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </TimeSelector>

          <View>
            <TimeSelectorValue>21 mar - 27 mar</TimeSelectorValue>
          </View>
        </TimeHeader>

        <ResumeContainer >
          <ResumeLegendContainer>
            <ResumeTitle>Visão geral dos insights</ResumeTitle>
            <ResumeLegend>Você ganhou mais <Positive>2</Positive> seguidores em comparação com 14 mar - 20 mar.</ResumeLegend>
          </ResumeLegendContainer>

          <View>
            <IndicatorResume>
              <View>
                <IndicatorResumeText>Contas alcançadas</IndicatorResumeText>
              </View>

              <LeftBox>
                <View>
                  <IndicatorResumeTextData>14</IndicatorResumeTextData>
                  <IndicatorResumeTextPercentage>-92,4%</IndicatorResumeTextPercentage>
                </View>

                <IconContainer>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </IconContainer>
              </LeftBox>
            </IndicatorResume>

            <IndicatorResume>  
              <View>
                <IndicatorResumeText>Contas com engajamento</IndicatorResumeText>
              </View>

              <LeftBox>
                <View>
                  <IndicatorResumeTextData>0</IndicatorResumeTextData>
                  <IndicatorResumeTextPercentage>-100%</IndicatorResumeTextPercentage>
                </View>

                <IconContainer>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </IconContainer>
              </LeftBox>
            </IndicatorResume>

            <IndicatorResume>  
              <View>
                <IndicatorResumeText>Total de seguidores</IndicatorResumeText>
              </View>
              
              <LeftBox>
                <View>
                  <IndicatorResumeTextData>288</IndicatorResumeTextData>
                  <IndicatorResumeTextPercentagePositive>+0,6%</IndicatorResumeTextPercentagePositive>
                </View>

                <IconContainer>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" />
                </IconContainer>
              </LeftBox>
            </IndicatorResume>


          </View>
        </ResumeContainer>


        
        <CategoriesResumes>
            <SectionTitle> 
              <SectionTitleText>Contéudo que você compartilhou</SectionTitleText>
            </SectionTitle>

            <CategoryResume >
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Publique fotos ou vídeos para ver nossos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Criar publicação</AddLink>
              </View>
            </CategoryResume>

            <CategoryResume >
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Adicione fotos ou vídeos ao sey story para ver novos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Criar story</AddLink>
              </View>
            </CategoryResume>

            <CategoryResume >
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Compartilhe vídeos do Reels para ver novos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Criar vídeo do Reels</AddLink>
              </View>
            </CategoryResume>

            <CategoryResume >
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Adicione vídeos pra ver novos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Criar vídeo</AddLink>
              </View>
            </CategoryResume>

            <CategoryResume>
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Compartilhe um vídeo ao vivo para ver novos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Transmitir ao vivo</AddLink>
              </View>
            </CategoryResume>

            <CategoryResume >
              <CategoryResumeLabel>
                <CategoryResumeLabelText>Turbine uma publicação ou story para ver novos insights.</CategoryResumeLabelText>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#404040" />
              </CategoryResumeLabel>

              <View>
                <AddLink>Criar promoção</AddLink>
              </View>
            </CategoryResume>
        </CategoriesResumes>
        
      </ScrollView>
    </Theme>
  )
}

export default Index


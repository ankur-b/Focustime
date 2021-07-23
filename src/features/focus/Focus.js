import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from '../../components/RoundedButton'
import {fontsizes,paddingsizes} from '../../utils/sizes'
export const Focus = ({addSubject}) => {
  const [tmpItem,setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={{paddingTop:paddingsizes.lg,flexDirection:'row',alignItems:'center'}}>
          <TextInput style={{flex:1,marginRight:paddingsizes.md}} onSubmitEditing={({nativeEvent})=>{
           setTmpItem(nativeEvent.text)
          }} />
          <RoundedButton size={50} title="+" onPress={()=>{addSubject(tmpItem)}}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: 0.5,
    padding: paddingsizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontsizes.lg,
  },
});

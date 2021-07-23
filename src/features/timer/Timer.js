import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Countdown from '../../components/Countdown';
import RoundedButton from '../../components/RoundedButton';
const Timer = props => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{paddingTop: 40}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{props.focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper:{
      flex:0.3,
      padding:15,
      justifyContent:'center',
      alignItems:'center'
  }
});
export default Timer;

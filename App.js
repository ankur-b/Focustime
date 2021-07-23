import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import Timer from './src/features/timer/Timer';
const App = () => {
  const [focusSubject, setFocusSubject] = useState('gardening');
  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject}/> : <Focus addSubject={setFocusSubject} />}
      <Text>{focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
  },
});

export default App;

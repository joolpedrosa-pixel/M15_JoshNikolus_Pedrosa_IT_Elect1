import ColorChangerApp from './ColorChangerApp';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');
 if(showColorChanger){
   return(
     <View style={{ flex: 1 }}>
        <Button title="Back to Counter" onPress={() => setShowColorChanger(false)} />
        <ColorChangerApp />
      </View>
     );
 }
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
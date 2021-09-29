import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import io from 'socket.io-client';

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const socket = io('ws://192.168.1.6:8080');
    socket.on('data', (data) => {
      setData(Number(data));
    });
  });

  return (
    <View style={styles.container}>
      <CircularProgress
        radius={150}
        value={data}
        maxValue={40}
        textColor="#2F2F2F"
        valueSuffix={'°'}
        activeStrokeColor={'#4AA5FA'}
        activeStrokeSecondaryColor={'#3FDFF1'}
        inActiveStrokeColor={'#F2F3F6'}
        inActiveStrokeWidth={10}
        activeStrokeWidth={25}
        duration={2000}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

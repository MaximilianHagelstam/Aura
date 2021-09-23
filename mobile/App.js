import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const socket = io('ws://192.168.1.6:8080');
    socket.on('data', (data) => {
      // TODO: PayloadTooLargeError: request entity too large
      setData(data);
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.tempText}>{data}°</Text>
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
  tempText: {
    fontSize: 64,
    color: '#000',
  },
});

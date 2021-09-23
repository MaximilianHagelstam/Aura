import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import io from 'socket.io-client';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const socket = io('ws://192.168.1.6:8080');
    socket.on('data', (data) => {
      setData(data);
    });
  });

  return (
    <LinearGradient
      colors={['#FCB89D', '#A871EF']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 80 }}>{data}°</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

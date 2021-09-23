import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import io from 'socket.io-client';
import Weather from './components/Weather';

export default function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const socket = io('ws://192.168.1.6:8080');
    socket.on('data', (data) => {
      setData(data);
      setIsLoading(false);
    });
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Fetching Temperature</Text>
        </View>
      ) : (
        <Weather weather={'Drizzle'} temperature={data} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4',
  },
  loadingText: {
    fontSize: 30,
  },
});

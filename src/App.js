import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';
import Navigation from 'components/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default function App() {
  const [ready, setReady] = useState(false);
  // react cycle that run after every render of the component
  // <=> to componentdidmount componenentdidupdate hooks
  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });
  // }[user]); to run useEffect function only if user has changed
  // }[]); if we have a function to run once we pass empty array like when we want to user listener
  // when we subscribe to an event we must always unsubscribe to it in useEffect like componentdidunmount hook <
  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />

    </View>
  );

  const loaded = (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );

  return ready ? loaded : loading;
}

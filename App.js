import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TabNavigation from '../sequence7/src/Navigation/TabNavigation';


const App = () => {
  return (
    <TabNavigation style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightblue",
    marginTop: 50
  },
});
export default App;
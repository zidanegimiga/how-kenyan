import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, } from 'react-native';
import Button from '../components/Button';
import { useFonts } from 'expo-font';

export default function GameSelectionScreen() {
  const [loaded] = useFonts({
    'mutiara-display-shadow': require('../assets/fonts/Mutiara_Display_02_Shadow.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Game selection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});

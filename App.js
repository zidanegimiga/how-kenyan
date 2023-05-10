import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image} from 'react-native';
import Button from './components/Button';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'mutiara-display-shadow': require('./assets/fonts/Mutiara_Display_02_Shadow.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={{ fontFamily: 'mutiara-display-shadow', fontSize: 56, marginBottom: -8 }}>
          ARE
        </Text>
        <Text style={{ fontFamily: 'mutiara-display-shadow', fontSize: 56, marginBottom: -8 }}>
          YOU
        </Text>
        <Text style={{ fontFamily: 'mutiara-display-shadow', fontSize: 56, marginBottom: -8 }}>
          EVEN
        </Text>
        <Text style={{ fontFamily: 'mutiara-display-shadow', fontSize: 56, marginBottom: -8 }}>
          KENYAN?
        </Text>
      </View>
      <View>
        <Button 
          bgColor={'#F8FF81'}
          themeColor={'#A80C89'}
          label={`Let's see`}
        />
      </View>
      <Image
        source={require('./assets/images/kiccHomepage.png')}
        style={styles.image}
      />
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FF81',
    paddingTop: 90,
    paddingLeft: 24
  },
  image:{
    position: 'absolute',
    bottom: 0
  }
});

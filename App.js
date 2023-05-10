import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Platform, Image} from 'react-native';
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's see</Text>
        </TouchableOpacity>
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
  button: {
    borderStyle: 'solid',
    backgroundColor: '#F8FF81',
    borderWidth: 2,
    borderColor: '#A80C89',
    paddingBottom: 12,
    paddingTop: 12,
    paddingHorizontal: 30,
    borderRadius: 16,
    width: 180,
    marginTop: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#A80C89',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
      },
      android: {
        elevation: 10,
      },
    })
  },
  buttonText:{
    color: '#A80C89',
    textAlign: 'center'
  },
  image:{
    position: 'absolute',
    bottom: 0
  }
});

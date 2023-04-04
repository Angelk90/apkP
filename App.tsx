import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Card, TextInput } from 'react-native-paper';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
  };

  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[backgroundStyle, {}]}>
          <Card>
            <Text
              style={[
                styles.paragraph,
                {
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                },
              ]}>
              Text
            </Text>
            <TextInput
              label="Email"
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

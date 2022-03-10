import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PortableText } from '@portabletext/react';

const content = [
  {
    _type: "block",
    _key: "head",
    style: "h1",
    markDefs: [],
    children: [{ _type: "span", text: "@portabletext/react" }]
  }
];

const components = {
  block: {
    h1: ({ children }) => (<Text style={styles.h1}>{children}</Text>)
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <PortableText
				value={content}
        components={components}
				listNestingMode="direct"
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
  h1: {
    fontSize: 32,
  }
});

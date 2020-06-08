/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Welcome from './components/Welcome'

// const App: () => React$Node = () => {
//   return (
//     <View>
//       <Text>Hello There</Text>
//       <Welcome />
//     </View>
//   );
// };

export default function App() {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.hello_text}>Hello react native</Text>
      {/* <Welcome /> */}
    </View>
  );
}



// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.cotainer}>
//         <Text style={styles.hello_text}>Hello react native</Text>
//         {/* <Welcome /> */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    backgroundColor: '#ffd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello_text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

// export default App;

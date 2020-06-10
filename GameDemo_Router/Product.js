import * as React from 'react';
import { Text, View, Button } from 'react-native';

// export default class Product extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>This is Product page</Text>
//         <Button title="CHange Page"></Button>
//       </View>
//     );
//   }
// }

export default ({ history }) => (
    <View>
        <Text>This is Product page</Text>
        <Button title="CHange Page" onPress={ () => history.push("/") }></Button>
    </View>
);
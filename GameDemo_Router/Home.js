import * as React from 'react';
import { Text, View, Button } from 'react-native';

// export default class Home extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>This is home page</Text>
//         <Button title="CHange Page"></Button>
//       </View>
//     );
//   }
// }

export default ({ history }) => (
    <View>
        <Text>This is home page</Text>
        <Button title="CHange Page" onPress={ () => history.push("/product") }></Button>
    </View>
);
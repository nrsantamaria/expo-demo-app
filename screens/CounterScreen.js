import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CounterScreen = props => {
  return (
    <View>
      <Text>Counter Screen</Text>
    </View>
  )
}

// const CounterScreen = props => {
//   const [count, setCount] = useState(0);
//   const [greeting, setGreeting] = useState('Go Away!');
//   const increment = props.route.params.incrementBy

//   useEffect(() => {
//     setGreeting('Hello!')
//   })

//   return (
//     <View>
//       <Text>{count}</Text>
//       <Text>{greeting}</Text>
//       <Button title='Click me' onPress={() => setCount(count + increment)}/>
//     </View>
//   )
// }

const styles = StyleSheet.create({})

export default CounterScreen

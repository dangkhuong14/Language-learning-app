import React, {useState } from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'

const App = () => {
  const [status, setStatus] = useState('ok')
  console.log('Hello world');
  return (
    <View style={styles.root}>
      <View style={styles.item1}><Text style={styles.text}>1</Text></View>
      <View style={styles.item2}><Text style={styles.text}>2</Text></View>
      <View style={styles.item3}><Text style={styles.text}>3</Text></View>
      {/*<View style={styles.item4}><Text style={styles.text}>4</Text></View>*/}
      {/*<View style={styles.item5}><Text style={styles.text}>5</Text></View>*/}
      {/*<View style={styles.item6}><Text style={styles.text}>6</Text></View>*/}
    </View>
  )
}

export default App

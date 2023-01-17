import React from 'react'
import { Text, View } from 'react-native'

const App = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
    <Text style={{ color: 'yellow', fontWeight: 'bold' }}>
      Hello World:D
      {/* Children Text will inherit style of the Text parents components */}
      <Text style={{ color: 'green' }}>
        How are you?
      </Text>
    </Text>
  </View>
)

export default App

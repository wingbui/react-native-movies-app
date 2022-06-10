import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { AppStackNavigator } from './src/navigation/AppStackNavigator'

export default function App() {
  return (
    <>
      <StatusBar background='#2c3e50' barStyle='light-content' />
      <NativeBaseProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}

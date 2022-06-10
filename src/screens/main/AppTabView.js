import React from 'react'
import { TabView } from 'react-native-tab-view'
import { Box, useColorModeValue, Pressable, StatusBar } from 'native-base'

import { Dimensions, Animated } from 'react-native'
import { Movies } from './Movies'
import { SearchResults } from './SearchResults'
import { TVShows } from './TVShows'

const initialLayout = {
  width: Dimensions.get('window').width,
}

export const AppTabView = ({ navigation }) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Movies',
    },
    {
      key: 'second',
      title: 'Search Results',
    },
    {
      key: 'third',
      title: 'TV Shows',
    },
  ])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return (
          <Box p={2}>
            <Movies navigation={navigation} />
          </Box>
        )
      case 'second':
        return (
          <Box p={2}>
            <SearchResults navigation={navigation} />
          </Box>
        )

      case 'third':
        return (
          <Box p={2}>
            <TVShows navigation={navigation} />
          </Box>
        )
      default:
        return null
    }
  }

  const renderTabBar = (props) => {
    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa')
          const borderColor =
            index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400')
          return (
            <Box
              borderBottomWidth='3'
              borderColor={borderColor}
              flex={1}
              alignItems='center'
              p='3'
              cursor='pointer'
              key={route.title}
            >
              <Pressable
                onPress={() => {
                  setIndex(i)
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  )
}

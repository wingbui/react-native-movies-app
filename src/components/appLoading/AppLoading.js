import React from 'react';
import { ActivityIndicator } from 'react-native';
import { HStack, Text } from 'native-base';

export const AppLoading = () => {
  return (

    <HStack space={2}>
      <ActivityIndicator />
      <Text fontWeight={'bold'}>Loading Result...</Text>
    </HStack>
  );
};

import React from 'react';
import { Box, Image } from 'native-base';

export const Loading = () => {
  return (
    <Box>
      <Image
        source={{
          uri: '../../',
        }}
        alt={loading}
        size='xs'
      />
      Loading...
    </Box>
  );
};

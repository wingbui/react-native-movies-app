import React from 'react';
import { Heading, VStack, Box, Image, Text } from 'native-base';
import { posterUrl } from '../../utils';

export const Details = ({
  title,
  poster,
  overview,
  popularity,
  releaseDate,
}) => {
  return (
    <VStack space={7} alignItems='center' p={7}>
      <Heading textAlign='center'>{title}</Heading>
      <Box>
        <Image
          source={{
            uri: `${posterUrl}${poster}`,
          }}
          alt={title}
          size='2xl'
        />
      </Box>
      <VStack space={7}>
        <Text>{overview}</Text>
        <Text>
          Popularity: {`${popularity} | Release Date: ${releaseDate}`}
        </Text>
      </VStack>
    </VStack>
  );
};

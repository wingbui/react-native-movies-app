import {
  Image,
  Box,
  Container,
  Text,
  Heading,
  HStack,
  Button,
} from 'native-base';
import React from 'react';
import { posterUrl } from '../../utils';

export const AppCard = ({
  navigation,
  title,
  poster,
  popularity,
  releaseDate,
  id,
  url,
}) => {
  return (
    <HStack space={2} mt={5} pr={5}>
      <Box flex={1}>
        <Image
          source={{
            uri: `${posterUrl}${poster}`,
          }}
          alt={title}
          size='xl'
        />
      </Box>
      <Container flex={2} justifyContent='center'>
        <Heading size='sm'>{title}</Heading>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Date: {releaseDate}</Text>
        <Button
          w='full'
          bg={'cyan.500'}
          onPress={() => navigation.navigate('DetailsPlaceholder', { id, url })}
        >
          More Details
        </Button>
      </Container>
    </HStack>
  );
};

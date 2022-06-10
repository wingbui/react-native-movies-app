import React, { useState } from 'react';
import {
  FlatList,
  Text,
  FormControl,
  Input,
  VStack,
  Center,
  Button,
  HStack,
  Icon,
  WarningOutlineIcon,
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { AppCard } from '../../components/appCard/AppCard';
import { AppSelect } from '../../components/appSelect/AppSelect';
import axios from 'axios';
import { moviesDBUrl, API_KEY } from '../../utils';
import { AppLoading } from '../../components/appLoading/AppLoading';

export const SearchResults = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [option, setOption] = useState('movie');
  const [page, setPage] = useState(1);
  const [formData, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const search = () => {
    setErrMsg(null);

    if (!formData) {
      setErrMsg('Please enter Movie/TV Name');
      return;
    }

    setLoading(true);
    axios
      .get(
        `${moviesDBUrl}/search/${option}?api_key=${API_KEY}&query=${formData}&page=${page}`
      )
      .then((res) => {
        setResults(res.data.results);
        setLoading(false);
        setErrMsg(null);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErrMsg(err.message);
      });
  };

  return (
    <VStack space={6}>
      <Center mt={3}>
        <VStack width='90%' mx='3' maxW='300px'>
          <FormControl isRequired isInvalid={errMsg}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Search Movie/TV Show Name
            </FormControl.Label>
            <Input
              placeholder='i.e James Bond'
              onChangeText={(value) => setData(value)}
              InputLeftElement={
                <Icon
                  ml='2'
                  size='4'
                  color='gray.400'
                  as={<Ionicons name='ios-search' />}
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size='xs' />}
            >
              {errMsg}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Choose Search Type
            </FormControl.Label>

            <HStack justifyContent='space-between'>
              <AppSelect
                options={['movie', 'multi', 'tv']}
                setOption={setOption}
                option={option}
              />
              <Button
                bg={'cyan.500'}
                onPress={() => {
                  search();
                }}
                style={{ flexDirection: 'row' }}
              >
                Search
              </Button>
            </HStack>
            <FormControl.HelperText
              _text={{
                fontSize: 'xs',
              }}
            >
              Please select a search type
            </FormControl.HelperText>
          </FormControl>
        </VStack>
      </Center>

      {loading && (
        <Center>
          <AppLoading />
        </Center>
      )}

      {results.length > 0 && (
        <FlatList
          data={results}
          renderItem={(result) => {
            return (
              <AppCard
                navigation={navigation}
                title={result.item.title || result.item.name}
                poster={result.item.poster_path}
                popularity={result.item.popularity}
                releaseDate={result.item.release_date}
                id={result.item.id}
                url={`${moviesDBUrl}/${result.item.title ? 'movie' : 'tv'}`}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </VStack>
  );
};

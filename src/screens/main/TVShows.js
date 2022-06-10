import React, { useEffect, useState } from 'react';
import { Center, FlatList, VStack } from 'native-base';
import { AppCard } from '../../components/appCard/AppCard';
import { AppSelect } from '../../components/appSelect/AppSelect';
import axios from 'axios';
import { moviesDBUrl, API_KEY } from '../../utils';
import { AppLoading } from '../../components/appLoading/AppLoading';

export const TVShows = ({ navigation }) => {
  const [shows, setShows] = useState([]);
  const [option, setOption] = useState('airing_today');
  const [page, setPage] = useState(1);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${moviesDBUrl}/tv/${option}?api_key=${API_KEY}&page=${page}`)
      .then((res) => {
        setShows(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, [option, page]);

  return (
    <VStack space={6}>
      <Center>
        <AppSelect
          options={['airing_today', 'on_the_air', 'popular', 'top_rated']}
          setOption={setOption}
          option={option}
        />
      </Center>
      {loading && (
        <Center>
          <AppLoading />
        </Center>
      )}

      {shows.length > 0 && (
        <FlatList
          data={shows}
          renderItem={(show) => {
            return (
              <AppCard
                navigation={navigation}
                title={show.item.name}
                poster={show.item.poster_path}
                popularity={show.item.popularity}
                releaseDate={show.item.release_date}
                id={show.item.id}
                url={`${moviesDBUrl}/tv`}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </VStack>
  );
};

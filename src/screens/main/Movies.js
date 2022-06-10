import React, { useEffect, useState } from 'react';
import { Center, FlatList, VStack } from 'native-base';
import { AppCard } from '../../components/appCard/AppCard';
import { AppSelect } from '../../components/appSelect/AppSelect';
import axios from 'axios';
import { moviesDBUrl, API_KEY } from '../../utils';
import { AppLoading } from '../../components/appLoading/AppLoading';

export const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState('now_playing');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${moviesDBUrl}/movie/${option}?api_key=${API_KEY}&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [option, page]);

  return (
    <VStack space={6}>
      <Center>
        <AppSelect
          options={['now_playing', 'popular', 'top_rated', 'upcoming']}
          setOption={setOption}
          option={option}
        />
      </Center>

      {loading && (
        <Center>
          <AppLoading />
        </Center>
      )}

      {movies.length > 0 && (
        <FlatList
          data={movies}
          renderItem={(movie) => {
            return (
              <AppCard
                navigation={navigation}
                title={movie.item.title}
                poster={movie.item.poster_path}
                popularity={movie.item.popularity}
                releaseDate={movie.item.release_date}
                id={movie.item.id}
                url={`${moviesDBUrl}/movie`}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </VStack>
  );
};

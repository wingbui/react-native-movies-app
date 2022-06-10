import React, { useState, useEffect } from 'react';
import { Details } from '../../components/details/Details';
import axios from 'axios';
import { API_KEY } from '../../utils';
import { ScrollView } from 'native-base';

export const DetailsPlaceholder = ({ route }) => {
  const [item, setItem] = useState();
  const [headerTitle, setHeaderTitle] = useState(null);
  route.name = headerTitle;

  useEffect(() => {
    axios
      .get(`${route.params.url}/${route.params.id}?api_key=${API_KEY}`)
      .then((res) => {
        setItem(res.data);
        setHeaderTitle(res.data.title || res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (item) {
    return (
      <ScrollView>
        <Details
          title={item.title || item.name}
          overview={item.overview}
          releaseDate={item.release_date}
          poster={item.poster_path}
          popularity={item.popularity}
        />
      </ScrollView>
    );
  } else {
    return null;
  }
};

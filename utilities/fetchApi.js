import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'c9da2525e8mshc70564bfbf82554p12f6a0jsn1dcb460d8f30',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
};

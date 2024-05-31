import axios from 'axios';

export default async function getArticles(newQuery, page) {
  axios.defaults.baseURL = 'https://api.unsplash.com/';

  const result = await axios.get('search/photos', {
    params: {
      client_id: 'i09VLBEIM4LTC5kq2cMEhkhNVh6UwiZyHqUjzRkyKOw',
      query: newQuery,
      page,
    },
  });
  return result.data;
}

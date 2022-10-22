import axios from 'axios';

export default axios.create({
  baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/`
});

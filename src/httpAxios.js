

import axios from "axios";

const httpAxio = axios.create({
    baseURL: 'http://localhost:81/nartt/public/api',
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default httpAxio;
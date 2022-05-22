import axios from "axios";

const apiCall = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1',
})

export default apiCall;
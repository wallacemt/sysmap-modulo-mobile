import axios from 'axios';

const baseURL = 'http://10.0.2.2:3000';

export function getHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

export default axios.create({
  baseURL,
});

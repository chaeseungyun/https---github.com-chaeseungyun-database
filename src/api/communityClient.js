import axios from "axios";

const community = axios.create({
  baseURL: 'http://localhost:5000/api/community/',
  timeout: 1000,
});

const users = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  timeout: 1000,
})

const shops = axios.create({
  baseURL: 'http://localhost:5000/api/shops',
  timeout: 1000,
})

const reviews = axios.create({
  baseURL: 'http://localhost:5000/api/reviews',
  timeout: 1000,
})

export {community, users, shops, reviews};

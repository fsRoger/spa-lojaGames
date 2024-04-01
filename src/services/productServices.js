import axios from 'axios';

const baseURL = "http://localhost:3000";


export function getAllGames() {
  const response = axios.get(`${baseURL}/product`);
  return response;
}

export async function getProductById(id) {
  const response = await axios.get(`${baseURL}/product/${id}`);
  return response;

}




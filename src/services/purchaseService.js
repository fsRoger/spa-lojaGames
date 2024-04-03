import axios from 'axios';

const baseURL = ' https://api-lojagames.up.railway.app';

export async function createPurchase(data) {
  const response = await axios.post(`${baseURL}/purchase`, data);
  return response;
}

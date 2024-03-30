import axios from 'axios';

const baseURL = "http://localhost:3000";

export async function createPurchase(data) {
  const response = await axios.post(`${baseURL}/purchase`, data);
  return response;
}

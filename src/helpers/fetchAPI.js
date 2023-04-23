import axios from 'axios';

const BASE_URL = 'https://6444137690738aa7c07e8004.mockapi.io/followme';
const CARDS_LIMIT = 3;

export const fetchUsers = async (page, controllerSignal) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: {
        page,
        limit: CARDS_LIMIT,
      },
      signal: controllerSignal,
    });
    if (response.data.length < CARDS_LIMIT) {
      return 'End of results';
    }

    return response.data;
  } catch (e) {
    if (axios.isCancel) {
      return;
    }
    console.error(e);
  }
};

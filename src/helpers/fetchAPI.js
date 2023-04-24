import axios from 'axios';
import { toast } from 'react-toastify';

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

    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    toast.error(e.message);
    console.error(e);
  }
};

export const updateFollowers = async userData => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/${userData.id}`,
      userData
    );
    return response.data;
  } catch (e) {
    toast.error(e.message);
    console.error(e);
  }
};

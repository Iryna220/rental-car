import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://650dadb4a8b42265ec2c94b2.mockapi.io';

export const options = {
  width: '400px',
  position: 'center-center',
  timeout: 1500,
  fontSize: '20px',
};

const getCars = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getCarsThunk = createAsyncThunk('cars/getCars', getCars);

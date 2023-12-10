import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650dadb4a8b42265ec2c94b2.mockapi.io';

export const LIMIT = 12;

const getAllCars = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.date;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const getCars = async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts?page=${page}&limit=${LIMIT}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getCarsThunk = createAsyncThunk('cars/getCars', getCars);

export const getAllCarsThunk = createAsyncThunk('cars/getAllCars', getAllCars);

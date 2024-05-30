import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

let apiKey = process.env.OPENWEATHERMAP_API_KEY;
let baseURL = process.env.OPENWEATHERMAP_API_URL;

if (!apiKey) {
    throw new Error('OPENWEATHERMAP_API_KEY is not defined in the environment variables');
}

let weatherService = {
    getWeatherByCoords: async (lat: number, lon: number, city: string) => {
        try {
            let response = await axios.get(`${baseURL}/weather`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: apiKey,
                    units: 'metric',
                    q: city
                },
            });
            console.log('getWeatherByCoords',response.data);
            return response.data;
        } catch (error) {
            throw new Error('An unexpected error occurred');
        }
    },
};

export default weatherService;
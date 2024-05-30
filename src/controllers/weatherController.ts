import { Request, Response } from 'express';
import weatherService from '../services/weatherService';
import AppDataSource from "../config/db"
import { Weather } from '../models/Weather';

let weatherController = {
    getWeatherByCoords: async (req: Request, res: Response) => {
        let lat = parseFloat(req.query.lat as string);
        let lon = parseFloat(req.query.lon as string);
        let city = req.query.city as string;

        if (isNaN(lat) || isNaN(lon)) {
            return res.status(400).json({ error: 'Invalid latitude or longitude' });
        }

        try {
            let weatherData = await weatherService.getWeatherByCoords(lat, lon, city);

            let weatherEntity = new Weather();
            weatherEntity.latitude = lat
            weatherEntity.longitude = lon
            weatherEntity.apiOutput = weatherData

            let weatherRepository = AppDataSource.getRepository(Weather)

            await weatherRepository.save(weatherEntity)
            console.log("Details has been saved")

            res.json(weatherData);
        } catch (error) {
            if (typeof error === 'object' && error !== null && 'message' in error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unexpected error occurred' });
            }
        }
    },
};

export default weatherController;
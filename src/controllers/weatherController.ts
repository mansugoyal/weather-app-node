import { Request, Response } from 'express';
import weatherService from '../services/weatherService';

let weatherController = {
    getWeatherByCoords: async (req: Request, res: Response) => {
        const lat = parseFloat(req.query.lat as string);
        const lon = parseFloat(req.query.lon as string);

        if (isNaN(lat) || isNaN(lon)) {
            return res.status(400).json({ error: 'Invalid latitude or longitude' });
        }

        try {
            const weatherData = await weatherService.getWeatherByCoords(lat, lon);
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
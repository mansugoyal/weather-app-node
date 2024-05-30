import express from 'express';
import weatherController from '../controllers/weatherController';

//intializaton router
let router = express.Router();

//to get weather details
router.get('/weather', weatherController.getWeatherByCoords);

export default router;
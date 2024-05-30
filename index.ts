import express, { Request, Response } from 'express';
import weatherRoutes from './src/routes/weatherRoutes';
import cookieParser from 'cookie-parser';
import AppDataSource from './src/config/db';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;

// Use cookie-parser middleware
app.use(cookieParser());
app.use(cors());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')); // Assuming your views are in a folder named 'views'

// Set up routes and other middleware here
app.get('/', (req: Request, res: Response) => {
    res.render('weather');
});

// Routes
app.use(weatherRoutes);

// Start the server after the Data Source is initialized
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;

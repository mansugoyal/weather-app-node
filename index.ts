import express, { Request, Response } from 'express';
import weatherRoutes from './src/routes/weatherRoutes';
import cookieParser from 'cookie-parser';
import AppDataSource from './src/config/db';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;

// Use cookie-parser middleware
app.use(cookieParser());
app.use(cors());

// Initialize the Data Source and start the server
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

// Set up routes and other middleware here
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Routes
app.use(weatherRoutes);

// Start the server after the Data Source is initialized
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;

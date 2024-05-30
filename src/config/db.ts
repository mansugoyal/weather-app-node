import { DataSource } from "typeorm"
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        "./src/models/*.ts"  // Ensure this path is correct and points to your entities
    ],
    migrations: [
        "./src/migrations/*.ts"  // Ensure this path is correct and points to your migrations
    ],
    subscribers: [],
})

// Initialize the Data Source and start the server
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

export default AppDataSource;
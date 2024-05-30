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

export default AppDataSource;
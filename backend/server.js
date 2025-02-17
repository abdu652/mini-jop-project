import express from 'express';
import dotenv from 'dotenv';
import db from './db/connect.db.js';

// Middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';

// Routers
import authRouter from './routes/auth.route.js';
import jobsRouter from './routes/jobs.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Ensure JSON middleware is used before routes

app.get('/', (req, res) => {
    res.send("home page");
});

// ✅ Register routes correctly
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobsRouter);

// Middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        await db(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.log(err.message);
    }
};

start();

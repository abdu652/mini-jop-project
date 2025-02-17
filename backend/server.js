import express from 'express';
import dotenv from 'dotenv';
import db from './db/connect.db.js';
// middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';
// router
import authRouter from './routes/auth.route.js';
import jobsRouter from './routes/jobs.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("home page");
});

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobsRouter); // Corrected this line to use jobsRouter instead of authRouter

// middleware
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
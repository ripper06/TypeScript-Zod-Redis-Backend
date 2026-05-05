import express from 'express';
import resturantsRouter from './routes/restaurants.js';
import cuisinesRouter from './routes/cuisines.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/restaurants', resturantsRouter);
app.use('/cuisines', cuisinesRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting the server:', err);
});
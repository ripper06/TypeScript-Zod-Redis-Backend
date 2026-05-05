import express from 'express';
import { ResturantSchema } from '../schemas/resturants.js';
import { validate } from '../middlewares/validate.js';
import { initializeRedisClient } from '../utils/client.js';
const router = express.Router();

router.post("/", validate(ResturantSchema), async(req, res) => {
    const data = req.body as Resurant;
    const client = await initializeRedisClient();
    res.send("Hello World");
});

export default router;
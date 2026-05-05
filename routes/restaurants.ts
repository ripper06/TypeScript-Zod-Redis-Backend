import express from 'express';
import { ResturantSchema } from '../schemas/resturants.js';
import { validate } from '../middlewares/validate.js';
const router = express.Router();

router.post("/", validate(ResturantSchema), (req, res) => {
    const data = req.body as Resurant;
    res.send("Hello World");
});

export default router;
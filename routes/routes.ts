import express from "express"
import {homeDetail} from '../controllers/user';

const router = express.Router();

router.get('/home',homeDetail)

export {
    router
}
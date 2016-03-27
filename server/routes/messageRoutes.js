import express from 'express';
const router = express.Router();

import * as MessageController from '../controllers/messageController';
import authenticateToken from './middlewares/authenticateToken';

router.route('/', authenticateToken)
  .get(MessageController.all)
  .post(MessageController.create);


export default router;
